# type-react-env

## コマンドパレット⇨ユーザー設定を開く(Preferences: Open User setting)
## 「setting.jsonを開く」を探してクリック

## 以下の記述がなければ追加
## ・"editor.formatOnSave": true
### ⇨ファイルを保存する度にPrettierがはしるようにする。

## ・"editor.codeActionOnSave": {
##    "source.organizeImports": true,
##    "source.fixAll": true 
## }
### ⇨editor...はファイル保存時に実行されるコードアクションを設定する
### ⇨source.organizeImportsはインポート文の整理を行う
### ⇨source.fixAllは自動修正を行う
##    "javascript.format.enable": false,
##    "typescript.format.enable": false,
### ⇨既定の設定でのフォーマッタを無効にし、ESlintを適応させるため...なはず
#
### まとめると、
##   "editor.formatOnSave": true,
##    "javascript.format.enable": false,
##    "typescript.format.enable": false,
##    "editor.codeActionsOnSave": {
##        "source.organizeImports": true,
##        "source.fixAll": true
##    },
### を追加して動かせば正常に動くはず。