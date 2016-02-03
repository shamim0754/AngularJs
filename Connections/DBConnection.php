<?php 
class DBConnection {

    private static $HOSTNAME = "localhost";
    private static $DATABASE = "leave_app";
    private static $USERNAME = "root";
    private static $PASSWORD = "";
	
    //define an object of Connection
    private static  $conn = null;

    /**
     * Protected constructor to prevent creating a new instance of the
     * *DBConnection* via the `new` operator from outside of this class.
     */
    private function __construct() {
		
		
    }

   /**
   *
   Get the only object available
   */
   public static function getInstance(){
        //create an object of DBConnection
        if(null == static :: $conn) {
             try {
                 static :: $conn = new PDO(sprintf("mysql:host=%s;dbname=%s",static::$HOSTNAME,static::$DATABASE), static::$USERNAME, static::$PASSWORD);
                 //enable to throw error,otherwise can't throw error
		 static :: $conn ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
              } catch (PDOException $e) {
                      print "Error!: " . $e->getMessage() . "<br/>";
                      die();
              }
        }
        return  static :: $conn;
	 
   }
   /**
     * Private clone method to prevent cloning of the instance of the
     * *DBConnection* instance  via the clone operator..
     *
     * @return void
     */
    private function __clone(){
		
    }
	
	 /**
     * Private unserialize method to prevent unserializing of the *DBConnection*
     * instance ia the global function unserialize() ..
     *
     * @return void
     */
    private function __wakeup()
    {
    }
}

?>