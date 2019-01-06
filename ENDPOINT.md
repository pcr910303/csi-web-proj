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
* returns: JSON
  - status: "success" | false
  - error: undefined | "form-malformed" | "user-exists"
* errors:
  - 400, "form-malformed": When form does not contain one of the parameters
  - 400, "user-exists": When same user with same email exists

#### `/auth/login`

* POST
* parameters: email, password
* returns: JSON
  - status: "success" | false
  - error: undefined | "user-does-not-exist" | "password-does-not-match"
* errors:
  - 401, "user-does-not-exist": When there is no such user that has the same email
  - 401, "password-does-not-match": When password does not match

### `/api`

Set of APIs.
