# ChatApp

## 概要

チャットの送信と閲覧のみを行えるシンプルな匿名チャットアプリ

アプリの使用には google ログインが必要

アプリ公開 URL： [chatapp-23f71.web.app](https://chatapp-23f71.web.app/)

## アプリ画像

![App Image](https://i.imgur.com/8cNqZtC.png)

## 使用技術

| 名前                    | 内容                             |
| ----------------------- | -------------------------------- |
| Nuxt.js                 | Web フロントエンドフレームワーク |
| Vuex                    | 状態管理ライブラリ               |
| TypeScript              | AltJS                            |
| TailwindCSS             | CSS フレームワーク               |
| Firebase Firestore      | データベース                     |
| Firebase Hosting        | 静的サイトホスティング           |
| Firebase Authentication | ユーザー認証                     |

## 環境構築

前提として、`Yarn`がインストールされている

```bash

# 開発環境構築
$ yarn install
$ yarn add -D @nuxtjs/fontawesome @fortawesome/free-regular-svg-icons
$ yarn add -D @nuxtjs/tailwindcss tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

firebase の apiKey を`/infrastructure/firebaseCertificate.js`に置く
