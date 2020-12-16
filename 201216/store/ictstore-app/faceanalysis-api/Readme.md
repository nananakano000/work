## faceanalysis-apiの起動手順
※`ictstore-app/Readme.md`の`2. faceanalysis-apiの起動手順`と同様

### 前提
・DockerDesktopのインストール  
・Gitプロジェクトのclone (git@ict.co.jp:shiratori/ictstore.git) 

### 1. Gitプロジェクトの最新化
`cd {Gitプロジェクトのディレクトリ}`  
`git pull`  

### 2. Dockerイメージのbuildとコンテナの起動
`cd {Gitプロジェクトのディレクトリ}/ictstore/examinations/ictstore-app/frontend`  
`docker-compose build`（※初回のみ）  
`docker-compose up -d`  
`docker-compose exec faceanalysis /bin/bash`

### 3. faceanalysis-apiの起動
`python3 /usr/src/app/faceanalysis-api/api/run.py`  


####################################################  
  顔認証APIのみの動作確認手順  
####################################################  
※「3. faceanalysis-apiの起動 」まで行えること。  

①顔認証サーバの起動  
`python3 /usr/src/app/faceanalysis-api/api/run.py`  

②REST送信ツール(「chrome ARC」等)を使用して下記を送信  
【メソッド】：POST  
【URL】：http://localhost:5000/auth  
【bodytype】：application/json  
【送信ボディ】：  
{  
  "image": <任意の画像のbase64文字列（ヘッダ（data:image/jpeg;base64,）を除いたもの）>,  
  "threshold": <認証時の閾値（数値）>  
}  

※画像をbase64文字列に変換できるサイト  
https://colorcodesearch.com/binary/  
※`threshold`に大きい値（3.0など）を設定すると、ユーザ未登録でも「認証成功」時のコンソール出力が可能  

例。「lennon-2s.jpg」の場合。
---- リクエストbody ----
{  
  "image": "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",  
  "threshold": 1.3  
}  
---- レスポンスbody ----
{
"auth_result": true,
"face_distance": "0.166",
"facedetection_result": true,
"user_id": "lennon-2"
}
-----------------------

③正常時のコンソール出力内容  

●認証成功時  
face_recognition start.  
threshold : 1.0  
authenticate2.  
face_distance :  1.571  
face_distance :  1.272  
face_distance :  0.739  
save auth-image. /usr/src/app/report/auth-images/success_auth_lennon-2_20201201_030731.jpg  
face_recognition result : True  
auth_result result : True  
face_recognition end.  
172.21.0.1 - - [01/Dec/2020 03:07:31] "POST /auth HTTP/1.1" 200 -  

●認証失敗時  
face_recognition start.  
threshold : 0.1  
authenticate2.  
face_distance :  1.571  
face_distance :  1.272  
face_distance :  0.739  
save auth-image. /usr/src/app/report/auth-images/failure_auth_20201201_030934.jpg  
face_recognition result : True  
auth_result result : False  
face_recognition end.  
172.21.0.1 - - [01/Dec/2020 03:09:34] "POST /auth HTTP/1.1" 200 -  

●顔検出失敗時  
face_recognition start.  
threshold : 0.1  
authenticate2.  
save auth-image. /usr/src/app/report/auth-images/failure_facedetection_20201201_032802.jpg  
face_recognition result : False  
auth_result result : False  
face_recognition end.  
172.21.0.1 - - [01/Dec/2020 03:28:02] "POST /auth HTTP/1.1" 200 -  

## 参考記事

### OpenFace動作環境作成
https://elsammit-beginnerblg.hatenablog.com/entry/2020/05/17/192559  
https://blog.goo.ne.jp/jsp_job/e/a779b628252e23a4ebcf6c857e748f2f  