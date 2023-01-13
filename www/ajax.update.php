<?php
include_once('./_common.php');


$key_code[1] = "code-1234-5678-0000";
$key_code[2] = "code-1234-5678-1111";
$key_code[3] = "code-1234-5678-2222";
$key_code[4] = "code-1234-5678-3333";
$key_code[5] = "code-1234-5678-4444";

$gr_gr = isset($_POST['gr_gr']) ? $_POST['gr_gr'] : '';
$gr_name = isset($_POST['gr_name']) ? $_POST['gr_name'] : '';
$gr_hp = isset($_POST['gr_hp']) ? $_POST['gr_hp'] : '';
//$gr_hp = preg_replace("/[^0-9]*/s", "", $gr_hp);
$gr_count = isset($_POST['gr_count']) ? $_POST['gr_count'] : '';

$gr_gr = trim($gr_gr);
$gr_name = trim($gr_name);
$gr_hp = trim($gr_hp);

if($gr_count == "Y")
{
    $cnt = sql_fetch("select count(gm_id) as cnt from g5_first where gr_gr = '".$gr_gr."' ");
    $r_cnt = 45 - $cnt["cnt"];

    die(json_encode(array('gr_count_txt' => "$r_cnt")));

}

if($gr_gr == "" || $gr_name == "" || $gr_hp == "")
{
    die(json_encode(array('error' => '올바른 방법으로 이용해주세요.', 'key_code' => '')));
}

if($key_code[$gr_gr] == "")
{
    die(json_encode(array('error' => '올바른 방법으로 이용해주세요.', 'key_code' => '')));
}

if (!preg_match("/([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]+)/", $gr_hp))
{
    die(json_encode(array('error' => '이메일 주소가 형식에 맞지 않습니다.', 'key_code' => '')));
}
       

$cnt = sql_fetch("select * from g5_first where gr_gr = '".$gr_gr."' and gr_hp = '".$gr_hp."' ");

if($cnt["gm_id"] != ""){

    if($gr_name == $cnt["gr_name"])
    {
        die(json_encode(array('error' => '완료', 'key_code' => $key_code[$gr_gr])));
    }
    else{
        die(json_encode(array('error' => '이미 참여하신 이메일 주소입니다.', 'key_code' => '')));
    }
    
}

$cnt = sql_fetch("select count(gm_id) as cnt from g5_first where gr_gr = '".$gr_gr."' ");

if($cnt["cnt"] >= 45){
    die(json_encode(array('error' => '정원이 초과 하였습니다.', 'key_code' => '')));
}



$sql = "insert g5_first set 
gr_name = '".$gr_name."',
gr_hp = '".$gr_hp."', 
gm_datetime = now(), 
gr_gr = '".$gr_gr."'";

$result = sql_query($sql);

if($result){

    /*$sql = "update g5_first A, (select gm_id from g5_first where gr_gr = '".$gr_gr."' order by gm_id asc limit 45) B SET A.gr_pass = '1' where A.gm_id = B.gm_id  ";

    $result = sql_query($sql);

    if($result)
    {
        $cnt = sql_fetch("select * from g5_first where gr_gr = '".$gr_gr."' and gr_hp = '".$gr_hp."' ");
        if($cnt["gr_pass"] == "1"){
            die(json_encode(array('error' => '', 'key_code' => $key_code[$gr_gr])));
        }
        else{
            die(json_encode(array('error' => '정원이 초과 하였습니다.', 'key_code' => '')));
        }
    }
    else{
        die(json_encode(array('error' => '일시적인 오류 발생.', 'key_code' => '')));
    }*/

    die(json_encode(array('error' => '', 'key_code' => $key_code[$gr_gr])));
    
}
else{
    die(json_encode(array('error' => '중복된 이메일 주소가 있습니다.', 'key_code' => '')));
}

die(json_encode(array('error' => '잠시 후 다시 시도해주세요.', 'key_code' => '')));

?>