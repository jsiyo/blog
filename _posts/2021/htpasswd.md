---
title: Apache Basic Authentication
date: 2021-05-25
tags: ['Tech']
excerpt: htpasswd - basic authentication
---

Apache 웹 서버는 디렉터리에 `HTTP Basic Authentication`을 설정하여 사용자가 해당 디렉터리에 접근할 때 
간단한 인증방식을 통하여 접근제한을 할 수 있다.

사용하기 위해서는 mod_auth_basic 모듈이 필요함.

```apache
<Directory /var/www/html>
    AuthType Basic
    AuthName "Basic Authentication"
    AuthUserFile C:\Users\JEON\laragon\usr\passwd
    Require valid-user
</Directory>
```