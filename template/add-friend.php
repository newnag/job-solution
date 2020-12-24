<?php
header("Content-Type: application/json");

$AllowPublic = true; 
require('../administrator/include/config.inc.php');
require('../administrator/include/function.inc.php');

$Result['status']       =   'Error';
$Result['message']      =   '';
$Result['data']         =   null;


if(!empty($_POST['friend_id']) && !empty($_POST['myid'])){
    $mysqli     =   db_connect();

    if($mysqli){
      $myid = $_POST['myid'];
      $friend_id = $_POST['friend_id'];
      $action = 'Waiting';
      $createdate = date("Y-m-d H:i:s");
      $create_ip = $_SERVER["REMOTE_ADDR"];
      $status = 'Enable';

      $presql = $mysqli->prepare("SELECT * FROM friend WHERE user_id = ? AND request_by = ? LIMIT 1");
      $presql->bind_param("ii", $friend_id,$myid);
      $presql->execute();
      $prequery  =   $presql->get_result();

      if($prequery->num_rows>0){
        $Result['message'] = 'You have sent Request or have he/she in friend-list.';
      }
      else{
        $sql = $mysqli->prepare("INSERT INTO friend(user_id,request_by,request_action,CreateDate,CreateIP,Status) VALUES(?,?,?,?,?,?)");
        $sql->bind_param("iissss", $friend_id,$myid,$action,$createdate,$create_ip,$status);
        $sql->execute();

        $Result['status'] = 'Success';
        $Result['message'] = 'Add Friend Success';
        $Result['data'] = $sql->insert_id;
      }
    }
    else{
      $Result['message']      = 'Can not cannect database';
    }    


}else{

    $Result['message']      = 'Missing Variable';

}


echo json_encode($Result);

?>