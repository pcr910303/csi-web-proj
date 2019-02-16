## Endpoint documentation

This is written only for internal use. DO NOT rely on these endpoints.

### Documentation Format: 

#### `Endpoint location comes here`

* Request type comes here(GET|POST|GET...)
* parameters: Parameters comes here (Only when endpoints get POST requests)
* response: JSON(All endpoints response with JSON)
  - status: "success" | false
  - error: undefined | other available values
  - field name: field description and available values
* errors:
  - HTTP error code, HTTP response error field : When the error is thrown

### `/auth`

Set of endpoints related to authorization.

#### `/auth/signup`

* POST
  * parameters: email, name, code, password

  ```
  {
      "email": "luvtoyou@icloud.com",
      "password": "luvtoyou",
      "name": "조성빈",
      "code": "18113"
  }
  ```

  * returns:

  ```
  {
      "status": "success" | false,
      "error": undefined | "password-does-not-match" | "user-does-not-exist"
  }
  ```

    * errors:
      - 400, "form-malformed": When form does not contain one of the parameters
      - 400, "user-exists": When same user with same email exists

#### `/auth/login`

* POST
  * parameters: email, password

  ```
  {
      "email": "luvtoyou@icloud.com",
      "password": "luvtoyou"
  }
  ```

  * returns:

  ```
  {
      "status": "success" | false,
      "error": undefined | "user-does-not-exist" | "password-does-not-match"
  }
  ```

  * errors:
    - 401, "user-does-not-exist": When there is no such user that has the same email
    - 401, "password-does-not-match": When password does not match

### `/api`

Set of APIs.

#### `/api/timetable`

Set of APIs related to the timetable.

##### `/api/timetable/`

* GET
  * get the list of classes that the user attends
  * returns:

  ```
  {
      "status": "success" | false,
      "error": undefined,
      "data": ["물리 3", "수학 3"]
  }
  ```

* POST
  * append to the list of classes that the user attends
  * parameters: times

  ```
  {
      "times": ["확률과 통계"]
  }
  ```

  * returns:

  ```
  {
      "status": "success" | false,
      "error": undefined | "form-malformed"
  }
  ```

  * errors:
    - 400, "form-malformed": When times is not array

##### `/api/timetable/:time`

* GET
  * get the list of users of specified class
  * returns:

  ```
  {
      "status": "success" | false,
      "error": undefined,
      "data": ["18113"]
  }
  ```

#### `/api/users`

Set of APIs related to users.

##### `/api/users/:code`

* GET
  * get information of specified user
  * returns:

  ```
  {
      "status": "success" | false,
      "error": undefined | "user-does-not-exist",
      "data": {
          "email": "luvtoyou@icloud.com",
          "code": "18113",
          "times": ["물리 1", "고급 물리 1", "물리 3"]
      }
  }
  ```

  * errors:
  - 404, "user-does-not-exist": When there is no such user
