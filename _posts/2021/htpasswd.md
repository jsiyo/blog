---
title: 아파치 웹 서버 인증
date: 2021-05-25
tags: ['Tech']
excerpt: htpasswd - basic authentication
---

Apache는 특정 디렉터리에 접근할 때 `HTTP basic authentication`을 설정하여 접근 제한을 할 수 있다.  
사용하기 위해서는 mod_auth_basic 모듈이 필요함.

```
<Directory /var/www/html>
    AuthType Basic
    AuthName "Basic Authentication"
    AuthUserFile C:\Users\JEON\laragon\usr\passwd
    Require valid-user
</Directory>
```