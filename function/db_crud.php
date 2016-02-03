<?php
require_once("../Connections/DBConnection.php"); 
class DBCrud {

	//DB Connection
	private $conn = null;
	
	/**
	* default construct
	*
	*return $conn
	*/
	public function  __construct(){
            $this->conn = DBConnection :: getInstance();
	}
        /**
         * Display the custom query resource.
         *
         * @param  string  $query
         * @return data
         */
	public function query($query){	
            //echo $query;
            try{
                $stmt_read = $this->conn->query($query);
            }catch(PDOException $e){
                echo $e;
            }
            $result = $stmt_read->setFetchMode(PDO::FETCH_ASSOC);
            $data =  $stmt_read->fetchAll();
            return $data;
	}
	
        /**
         * Remove the specified resource from storage.
         *
         * @param  string  $table
         * @param  string  $conditions
         * @return 
         */
	public function delete($table,$condition_list = []){
            //Generate Conditions
            if(!empty($condition_list)) {
                //generate fields and values conditions
                foreach($condition_list as $field => $value){
                        $conditions .= ' and ' . $field . " = '" . $value . "' ";
                }
            }
            $this->conn->query("DELETE FROM $table WHERE 1 = 1 $conditions");
	}
	
        /**
         * function for insert a new resource.
         *
         * @return lastInsertId
         */
	 public function insert($table,$data = []){	
            //generate fields and values
            $fields = implode(',',array_keys($data));
            $values =  "'" . implode("','",$data) . "'" ;
            try{
                //echo "insert into $table ( $fields ) values ( $values )";
                $this->conn->query("insert into $table ( $fields ) values ( $values )");

            }catch(PDOException $e){
                    echo $e;
            }
            //return insert id
            return $this->conn->lastInsertId();
	}
	
	/**
        * Display the specified resource.
        *
        * @param  int  $id
        * @return 
        */
        public function read($table , $column_list = [] , $condition_list = []) {
            //get select column
            $columns = implode(',',$column_list);
            //Generate Conditions
            if(!empty($condition_list)) {
                //generate fields and values conditions
                foreach($condition_list as $field => $value){
                    $conditions .= ' and ' . $field . " = '" . $value . "' ";
                }
            }
            //echo "select $columns from $table where 1 = 1 $conditions";
            //execute query
            try{
                $stmt_read = $this->conn->query("select $columns from $table where 1 = 1 $conditions");
            }catch(PDOException $e){
                    echo $e;
            }
            $result = $stmt_read->setFetchMode(PDO::FETCH_ASSOC);
            $data =  $stmt_read->fetchAll();
            return $data;
        }
	
	/**
        * function for update the specified resource.
        *
        * @param  int  $id
        * @return Response
        */
	 
	 
        public function update($table , $data = [] , $condition_list = []){
            //generate fields and values
            foreach($data as $field => $value){
                $fieldAndvalues .= "$field = '$value',";
            }
           $fieldAndvalues = rtrim($fieldAndvalues , ',');
            //Generate Conditions
            if(!empty($condition_list)) {
                //generate fields and values conditions
                foreach($condition_list as $field => $value){
                    $conditions .= " and $field = '$value'";
                }
            }
            //echo "update $table set $fieldAndvalues where 1 = 1 $conditions";die;
            $this->conn->query("update $table set $fieldAndvalues where 1 = 1 $conditions");

        }
	
        /**
         * function for create prepare statement in DB
         *
         * @param  string  $query
         * @return generate db p_statement
         */
	function prepare($query){
            return $this->conn->prepare($query);
	}
	
        /**
        * function for get date from prepare statement in DB
        *
        * @param  p_state  $p_stat 
            * @param  array  $param
        * @return array
        */
        function prepare_exec($p_stat , $params = []){
            try{
                $p_stat->execute($params);
            }catch(PDOException $e){
                    echo $e;
            }
            return $p_stat->fetchAll();
        }
}
?>