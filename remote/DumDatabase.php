<?php


class DumDatabase {
  
    private $pdo;
 

    
    public function __construct()
    {
	global $docroot,$dumdb,$dumhost,$con;
    // $con = mysqli_connect("localhost","incasa","casain","developers");
    // $con = mysqli_connect("titan","developers","casain","developers");
    $con = mysqli_connect("pdb1046.freehostingeu.com","3537280_incasa","casain01","3537280_incasa");
        // check if DB_USERNAME, DB_PASSWORD, DB_NAME are defined and if not, define them
        if(!defined('DB_USERNAME')) {
            define('DB_USERNAME', '3537280_incasa');
        }
        if(!defined('DB_PASSWORD')) {
            define('DB_PASSWORD', 'casain01');
        }
        if(!defined('DB_NAME')) {
            define('DB_NAME', '3537280_incasa');
        }
        if(!defined('DB_DSN')) {
            define('DB_DSN', 'mysql:host=pdb1046.freehostingeu.com;dbname=3537280_incasa');
        }

        try
        {

             //   $this->pdo = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);

          // $this->pdo = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'ascii';"));
           // $this->pdo->exec("SET CHARACTER SET default");
            // $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // $this->pdo->query("set names 'latin1_swedish_ci'");
		// $this->pdo->exec("");

        } catch (Exception $e)
        {
            echo "error " . $e->getMessage();
        }
    }

    /**
    * custom query , joining multiple table, aritmathic etc
    * @param  string $sql  custom query
    * @param  array $data associative array 
    * @return array  recordset 
    */


    public function fetch_custom( $sql,$data=null) {
        global $con;
		$dumhost = "pdb1046.freehostingeu.com";
$tvalues = array();
$data = "";
$dbpropsString = "";
$numlines = 0;
$numrows = 0;


/*
      $dumdb = ($GLOBALS["___mysqli_ston"] = mysqli_connect($dumhost, DB_USERNAME, DB_PASSWORD)) or trigger_error(((is_object($GLOBALS["___mysqli_ston"]) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false))));
((bool)mysqli_query($dumdb, "USE " . DB_USERNAME));
*/
$result = mysqli_query($con, $sql) or trigger_error(((is_object($GLOBALS["___mysqli_ston"]) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false))));
$colqty = (($___mysqli_tmp = mysqli_num_fields($result)) ? $___mysqli_tmp : false) or trigger_error(((is_object($GLOBALS["___mysqli_ston"]) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false))));
$finfo = $result->fetch_fields();
$tvi = 0;
$tline = "";
$data = "[";
$count = mysqli_num_rows($result);	
$numrows = 0;
// print_r($result);
// exit;

while($trow = mysqli_fetch_assoc($result)){
 $rowi = 0;
    
    $tline = "{"; 

    foreach($trow as $ttvalue){

            $ttvalue = str_replace("\t"," ",$ttvalue);
            $ttvalue = str_replace("\n"," ",$ttvalue);
            $ttvalue = str_replace("\r"," ",$ttvalue);  
            $ttvalue = str_replace("\'","\'",$ttvalue);
            $ttvalue = addslashes($ttvalue);
            if($rowi == $colqty - 1) {
            $tline .= "\"" . $finfo[$rowi]->name . "\":\"" . $ttvalue . "\"}"; 
            } else {
            $tline .= "\"" . $finfo[$rowi]->name . "\":\"" . $ttvalue . "\","; 
        	} 
            $rowi++;


        
    }    
           $numrows++; 
    if($numrows == $count) {
    $data .= $tline;   
    } else {
    $data .= $tline . ",";
    }    
$rowi = 0;


 
$tvi++;
    }    
$data .= "]";
// echo "rrrrrrrrrrrrraaaaaaaaaaaaaaaaaaaaaaaaaaa<br>" . $data;
 // exit;
  return $data;
    }



    public function fetch_cstmArr( $sql,$data=null) {
        $dumhost = "pdb1046.freehostingeu.com";
        $tvalues = array();
        $data = "";
        $dbpropsString = "";
        $numlines = 0;
        $numrows = 0;
        
        
        
        $dumdb = ($GLOBALS["___mysqli_ston"] = mysqli_connect($dumhost, DB_USERNAME, DB_PASSWORD)) or trigger_error(((is_object($GLOBALS["___mysqli_ston"]) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false))));
        ((bool)mysqli_query($dumdb, "USE " . DB_NAME));
        
 
        $result = mysqli_query($dumdb, $sql) or trigger_error(((is_object($GLOBALS["___mysqli_ston"]) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false))));
        return $result;
        } 
 


    public function edit_custom( $sql,$data=null) {
	$dumhost = "pdb1046.freehostingeu.com";
$tvalues = array();
$data = "";
$dbpropsString = "";
$numlines = 0;
$numrows = 0;



      $dumdb = ($GLOBALS["___mysqli_ston"] = mysqli_connect($dumhost, DB_USERNAME, DB_PASSWORD)) or trigger_error(((is_object($GLOBALS["___mysqli_ston"]) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false))));
((bool)mysqli_query($dumdb, "USE " . DB_NAME));

$result = mysqli_query($dumdb, $sql) or trigger_error(((is_object($GLOBALS["___mysqli_ston"]) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false))));
if (strtolower(substr($sql, 0, 6)) == "insert") {
    return mysqli_insert_id($dumdb);
} else {
    return $result;
}
    }





/*
    public function edit_custom( $sql,$data=null) {
        global $con;
	$dumhost = "pdb1046.freehostingeu.com";
$tvalues = array();
$data = "";
$dbpropsString = "";
$numlines = 0;
$numrows = 0;

 
$result = mysqli_query($con, $sql) or trigger_error(((is_object($GLOBALS["___mysqli_ston"]) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false))));
  return $result;
    }
*/




    /**
     * begin a transaction.
     */
    public function begin_transaction()
    {
        $this->pdo->setAttribute(PDO::ATTR_AUTOCOMMIT, 0);
        $this->pdo->beginTransaction();
    }

    /**
     * commit the transaction.
     */
    public function commit()
    {
        $this->pdo->commit();
        $this->pdo->setAttribute(PDO::ATTR_AUTOCOMMIT, 1);
    }

    /**
     * rollback the transaction.
     */
    public function rollback()
    {
        $this->pdo->rollBack();
        $this->pdo->setAttribute(PDO::ATTR_AUTOCOMMIT, 1);
    }



    /**
    * fetch only one row 
    * @param  string $table table name
    * @param  string $col condition column
    * @param  string $val value column
    * @return array recordset
    */
    public function fetch_single_row($table,$col,$val)     
    {       
        $nilai=array($val);
        $sel = $this->pdo->prepare("SELECT * FROM $table WHERE $col=?");
        $sel->execute($nilai);
        $sel->setFetchMode( PDO::FETCH_OBJ );
        $obj = $sel->fetch();
        return $obj;
    }

    /**
    * fetch all data 
    * @param  string $table table name
    * @return array recordset
    */
    public function fetch_all($table)
    {
        $sel = $this->pdo->prepare("SELECT * FROM $table");
        $sel->execute();
        $sel->setFetchMode( PDO::FETCH_OBJ );
        return $sel;
    }
    /**
    * fetch multiple row
    * @param  string $table table name
    * @param  array $dat specific column selection
    * @return array recordset
    */
    public function fetch_col($table,$dat)
    {
        if( $dat !== null )
        $cols= array_values( $dat );
        $col=implode(', ', $cols);
        $sel = $this->pdo->prepare("SELECT $col from $table");
        $sel->execute();
        $sel->setFetchMode( PDO::FETCH_OBJ );
        return $sel;
    }

    /**
    * fetch row with condition
    * @param  string $table table name
    * @param  array $col which columns name would be select 
    * @param  array $where what column will be the condition
    * @return array recordset
    */
    public function fetch_multi_row($table,$col,$where)
    {

        $data = array_values( $where ); 
        //grab keys 
        $cols=array_keys($where);
        $colum=implode(', ', $col);
        foreach ($cols as $key) {
          $keys=$key."=?";
          $mark[]=$keys;
        }

        $jum=count($where);
        if ($jum>1) {
            $im=implode('? and  ', $mark);
             $sel = $this->pdo->prepare("SELECT $colum from $table WHERE $im");
        } else {
          $im=implode('', $mark);
             $sel = $this->pdo->prepare("SELECT $colum from $table WHERE $im");
        }
        $sel->execute( $data );
        $sel->setFetchMode( PDO::FETCH_OBJ );
        return  $sel;
    }

    /**
    * check if there is exist data
    * @param  string $table table name 
    * @param  array $dat array list of data to find
    * @return true or false
    */
    public function check_exist($table,$dat) {

        $data = array_values( $dat ); 
       //grab keys 
        $cols=array_keys($dat);
        $col=implode(', ', $cols);

        foreach ($cols as $key) {
          $keys=$key."=?";
          $mark[]=$keys;
        }

        $jum=count($dat);
        if ($jum>1) {
            $im=implode(' and  ', $mark);
             $sel = $this->pdo->prepare("SELECT $col from $table WHERE $im");
        } else {
          $im=implode('', $mark);
             $sel = $this->pdo->prepare("SELECT $col from $table WHERE $im");
        }
        $sel->execute( $data );
        $sel->setFetchMode( PDO::FETCH_OBJ );
        $jum=$sel->rowCount();
        if ($jum>0) {
            return true;
        } else {
            return false;
        }     
    }
    /**
    * search data
    * @param  string $table table name
    * @param  array $col   column name
    * @param  array $where where condition 
    * @return array recordset
    */
    public function search($table,$col,$where) {
        $data = array_values( $where );
        foreach ($data as $key) {
           $val = '%'.$key.'%';
           $value[]=$val;
        }
       //grab keys 
        $cols=array_keys($where);
        $colum=implode(', ', $col);

        foreach ($cols as $key) {
          $keys=$key." LIKE ?";
          $mark[]=$keys;
        }
        $jum=count($where);
        if ($jum>1) {
            $im=implode(' OR  ', $mark);
             $sel = $this->pdo->prepare("SELECT $colum from $table WHERE $im");
        } else {
          $im=implode('', $mark);
             $sel = $this->pdo->prepare("SELECT $colum from $table WHERE $im");
        }
           
        $sel->execute($value);
        $sel->setFetchMode( PDO::FETCH_OBJ );
        return  $sel;
    }
    /**
    * insert data to table
    * @param  string $table table name
    * @param  array $dat   associative array 'column_name'=>'val'
    */
    public function insert($table,$dat) {

        if( $dat !== null )
        $data = array_values( $dat );
        //grab keys 
        $cols=array_keys($dat);
        $col=implode(', ', $cols);

        //grab values and change it value
        $mark=array();
        foreach ($data as $key) {
          $keys='?';
          $mark[]=$keys;
        }
        $im=implode(', ', $mark);
        $ins = $this->pdo->prepare("INSERT INTO $table ($col) values ($im)");
        $ins->execute( $data );

    }

    /**
    * update record
    * @param  string $table table name
    * @param  array $dat   associative array 'col'=>'val'
    * @param  string $id    primary key column name
    * @param  int $val   key value
    */
    public function update($table,$dat,$id,$val) {
        if( $dat !== null )
        $data = array_values( $dat ); 
        array_push($data,$val);
        //grab keys
        $cols=array_keys($dat);
        $mark=array();
        foreach ($cols as $col) {
        $mark[]=$col."=?"; 
        }
        $im=implode(', ', $mark);
        $ins = $this->pdo->prepare("UPDATE $table SET $im where $id=?");
        $ins->execute( $data );
    }

    /**
    * delete record
    * @param  string $table table name
    * @param  string $where column name for condition (commonly primay key column name)
    * @param   int $id   key value
    */
    public function delete( $table, $where,$id ) { 
        $data = array( $id ); 
        $sel = $this->pdo->prepare("Delete from $table where $where=?" );
        $sel->execute( $data );
    }

    /**
    * delete record
    * @param  string $table table name
    * @param  string $where column name for condition (commonly primay key column name)
    * @param   int $id   key value
    */
    public function getRowCount($theSql) { 
        $sel = $this->pdo->query("$theSql");
	  $cntRows = (int) $sel->fetchColumn();
        return $cntRows;
    }
    
    public function __destruct() {
    $this->pdo = null;
    }
}  

?>
