<?php

$payload = json_decode(stripslashes($_POST['payload']));
$password = "ULTRAmegaHIPERsuperdifficultpassword18365385937267--..,.--,-..,-";

if($_GET['pass'] == sha1($password)) {
	if($payload->commits[0]->branch === 'master') {

		fwrite(fopen('./bitbucket.txt', 'a'), "(".date("d/m/Y")." - ".date("h:m:s").") NEW COMMIT => ".$payload->commits[0]->message);
		//echo shell_exec('git pull');
	} else {
		fwrite(fopen('./bitbucket.txt', 'a'), "(".date("d/m/Y")." - ".date("h:m:s").") UNKNOWN BRAND => ".$payload->commits[0]->branch."\n");


	}
	
} else {
	fwrite(fopen('./bitbucket.txt', 'a'), "(".date("d/m/Y")." - ".date("h:m:s").") WRONG GET KEY\n");
}
?>