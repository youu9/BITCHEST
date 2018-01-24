---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)
<!-- END_INFO -->

#Authentification

authentification endpoint
<!-- START_8c0e48cd8efa861b308fc45872ff0837 -->
## Login

Request POST, try to login user with email/password

> Example request:

```bash
curl -X POST "http://localhost/api/v1/login" \
-H "Accept: application/json" \
    -d "email"="harmon85@example.com" \
    -d "password"="dolorum" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/login",
    "method": "POST",
    "data": {
        "email": "harmon85@example.com",
        "password": "dolorum"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v1/login`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    email | email |  required  | 
    password | string |  required  | 

<!-- END_8c0e48cd8efa861b308fc45872ff0837 -->

#Currency

currency endpoint
<!-- START_cab5f30fb79978152ecbd3f121f1d9af -->
## Currencies

Return a list of currencies with the latest quotation

> Example request:

```bash
curl -X GET "http://localhost/api/v1/currencies" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/currencies",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
[
    {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 1,
            "date": "2018-01-24",
            "rate": 71,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": 5.28
        }
    },
    {
        "id": 2,
        "name": "Ethereum",
        "symbol": "ETH",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 31,
            "date": "2018-01-24",
            "rate": 78,
            "currency_id": 2,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": -4.14
        }
    },
    {
        "id": 3,
        "name": "Ripple",
        "symbol": "XRP",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 61,
            "date": "2018-01-24",
            "rate": 86,
            "currency_id": 3,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": 1.01
        }
    },
    {
        "id": 4,
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 91,
            "date": "2018-01-24",
            "rate": 74,
            "currency_id": 4,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": -4.16
        }
    },
    {
        "id": 5,
        "name": "Cardano",
        "symbol": "ADA",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 121,
            "date": "2018-01-24",
            "rate": 74,
            "currency_id": 5,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": -4.02
        }
    },
    {
        "id": 6,
        "name": "Litecoin",
        "symbol": "LTC",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 151,
            "date": "2018-01-24",
            "rate": 82,
            "currency_id": 6,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": -6.6
        }
    },
    {
        "id": 7,
        "name": "NEM",
        "symbol": "XEM",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 181,
            "date": "2018-01-24",
            "rate": 80,
            "currency_id": 7,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": 3.9
        }
    },
    {
        "id": 8,
        "name": "Stellar",
        "symbol": "XLM",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 211,
            "date": "2018-01-24",
            "rate": 85,
            "currency_id": 8,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": -11.4
        }
    },
    {
        "id": 9,
        "name": "IOTA",
        "symbol": "IOT",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 241,
            "date": "2018-01-24",
            "rate": 74,
            "currency_id": 9,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": 0.73
        }
    },
    {
        "id": 10,
        "name": "DASH",
        "symbol": "DASH",
        "created_at": null,
        "updated_at": null,
        "today_quotation": {
            "id": 271,
            "date": "2018-01-24",
            "rate": 73,
            "currency_id": 10,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10",
            "diff": -2.88
        }
    }
]
```

### HTTP Request
`GET api/v1/currencies`

`HEAD api/v1/currencies`


<!-- END_cab5f30fb79978152ecbd3f121f1d9af -->

<!-- START_f64c8d441ecee2166a729973f7b27767 -->
## Currency

Return a specific currency with quotations 30 days before

> Example request:

```bash
curl -X GET "http://localhost/api/v1/currency/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/currency/{id}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "currency": {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "created_at": null,
        "updated_at": null,
        "quotations": [
            {
                "id": 1,
                "date": "2018-01-24",
                "rate": 71,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 2,
                "date": "2018-01-23",
                "rate": 65.72,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 3,
                "date": "2018-01-22",
                "rate": 72.32,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 4,
                "date": "2018-01-21",
                "rate": 78.7,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 5,
                "date": "2018-01-20",
                "rate": 72.1,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 6,
                "date": "2018-01-19",
                "rate": 75.4,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 7,
                "date": "2018-01-18",
                "rate": 68.36,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 8,
                "date": "2018-01-17",
                "rate": 71.66,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 9,
                "date": "2018-01-16",
                "rate": 78.7,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 10,
                "date": "2018-01-15",
                "rate": 73.2,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 11,
                "date": "2018-01-14",
                "rate": 63.3,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 12,
                "date": "2018-01-13",
                "rate": 78.7,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 13,
                "date": "2018-01-12",
                "rate": 72.32,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 14,
                "date": "2018-01-11",
                "rate": 78.7,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 15,
                "date": "2018-01-10",
                "rate": 78.7,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 16,
                "date": "2018-01-09",
                "rate": 72.32,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 17,
                "date": "2018-01-08",
                "rate": 71.66,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 18,
                "date": "2018-01-07",
                "rate": 60,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 19,
                "date": "2018-01-06",
                "rate": 69.02,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 20,
                "date": "2018-01-05",
                "rate": 78.7,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 21,
                "date": "2018-01-04",
                "rate": 66.38,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 22,
                "date": "2018-01-03",
                "rate": 76.28,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 23,
                "date": "2018-01-02",
                "rate": 78.7,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 24,
                "date": "2018-01-01",
                "rate": 72.1,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 25,
                "date": "2017-12-31",
                "rate": 70.34,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 26,
                "date": "2017-12-30",
                "rate": 79.8,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 27,
                "date": "2017-12-29",
                "rate": 65.5,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 28,
                "date": "2017-12-28",
                "rate": 64.4,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 29,
                "date": "2017-12-27",
                "rate": 72.32,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            },
            {
                "id": 30,
                "date": "2017-12-26",
                "rate": 66.38,
                "currency_id": 1,
                "created_at": "2018-01-24 09:47:10",
                "updated_at": "2018-01-24 09:47:10"
            }
        ]
    },
    "quotations": [
        {
            "id": 1,
            "date": "2018-01-24",
            "rate": 71,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 2,
            "date": "2018-01-23",
            "rate": 65.72,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 3,
            "date": "2018-01-22",
            "rate": 72.32,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 4,
            "date": "2018-01-21",
            "rate": 78.7,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 5,
            "date": "2018-01-20",
            "rate": 72.1,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 6,
            "date": "2018-01-19",
            "rate": 75.4,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 7,
            "date": "2018-01-18",
            "rate": 68.36,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 8,
            "date": "2018-01-17",
            "rate": 71.66,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 9,
            "date": "2018-01-16",
            "rate": 78.7,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 10,
            "date": "2018-01-15",
            "rate": 73.2,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 11,
            "date": "2018-01-14",
            "rate": 63.3,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 12,
            "date": "2018-01-13",
            "rate": 78.7,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 13,
            "date": "2018-01-12",
            "rate": 72.32,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 14,
            "date": "2018-01-11",
            "rate": 78.7,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 15,
            "date": "2018-01-10",
            "rate": 78.7,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 16,
            "date": "2018-01-09",
            "rate": 72.32,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 17,
            "date": "2018-01-08",
            "rate": 71.66,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 18,
            "date": "2018-01-07",
            "rate": 60,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 19,
            "date": "2018-01-06",
            "rate": 69.02,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 20,
            "date": "2018-01-05",
            "rate": 78.7,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 21,
            "date": "2018-01-04",
            "rate": 66.38,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 22,
            "date": "2018-01-03",
            "rate": 76.28,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 23,
            "date": "2018-01-02",
            "rate": 78.7,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 24,
            "date": "2018-01-01",
            "rate": 72.1,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 25,
            "date": "2017-12-31",
            "rate": 70.34,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 26,
            "date": "2017-12-30",
            "rate": 79.8,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 27,
            "date": "2017-12-29",
            "rate": 65.5,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 28,
            "date": "2017-12-28",
            "rate": 64.4,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 29,
            "date": "2017-12-27",
            "rate": 72.32,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        },
        {
            "id": 30,
            "date": "2017-12-26",
            "rate": 66.38,
            "currency_id": 1,
            "created_at": "2018-01-24 09:47:10",
            "updated_at": "2018-01-24 09:47:10"
        }
    ]
}
```

### HTTP Request
`GET api/v1/currency/{id}`

`HEAD api/v1/currency/{id}`


<!-- END_f64c8d441ecee2166a729973f7b27767 -->

#Transaction

transaction endpoint
<!-- START_3937a0eb453886e83e0c8f26c305ce8d -->
## List (Currency)

Return all transactions of an users by currency

> Example request:

```bash
curl -X GET "http://localhost/api/v1/currency/{id}/transactions" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/currency/{id}/transactions",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
[
    {
        "id": 43,
        "quantity": 54,
        "date": "2018-01-07",
        "state": "own",
        "user_id": 12,
        "currency_id": 1,
        "quotation_id": 18,
        "created_at": "2018-01-24 09:47:11",
        "updated_at": "2018-01-24 09:47:11",
        "name": "Bitcoin",
        "rate": 60,
        "diff": 11
    }
]
```

### HTTP Request
`GET api/v1/currency/{id}/transactions`

`HEAD api/v1/currency/{id}/transactions`


<!-- END_3937a0eb453886e83e0c8f26c305ce8d -->

<!-- START_739dd7a62441def2c98078f39bb39e8f -->
## List (Own or Sold)

Return all transactions of an users by state 'own' or 'sold'

> Example request:

```bash
curl -X POST "http://localhost/api/v1/transactions" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/transactions",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v1/transactions`


<!-- END_739dd7a62441def2c98078f39bb39e8f -->

<!-- START_9f563e4a289d629953062dab86073622 -->
## Sell

Update a transaction in state 'sold'

> Example request:

```bash
curl -X POST "http://localhost/api/v1/sell/transaction/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/sell/transaction/{id}",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v1/sell/transaction/{id}`


<!-- END_9f563e4a289d629953062dab86073622 -->

<!-- START_60e6c9b5f545ac07f4a4d69de22c28c6 -->
## Buy

Create a transaction in state 'own'

> Example request:

```bash
curl -X POST "http://localhost/api/v1/buy/currency/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/buy/currency/{id}",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v1/buy/currency/{id}`


<!-- END_60e6c9b5f545ac07f4a4d69de22c28c6 -->

#User

user endpoint
<!-- START_080f3ecebb7bcc2f93284b8f5ae1ac3b -->
## Users

Return a list of users

> Example request:

```bash
curl -X GET "http://localhost/api/v1/users" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/users",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
[
    {
        "id": 2,
        "name": "Virgil Greenholt",
        "email": "alvah.brown@example.org",
        "is_verified": 1,
        "role": "Client",
        "created_at": "2018-01-24 09:47:10",
        "updated_at": "2018-01-24 09:47:10"
    },
    {
        "id": 3,
        "name": "Theresa McKenzie",
        "email": "america96@example.com",
        "is_verified": 1,
        "role": "Client",
        "created_at": "2018-01-24 09:47:10",
        "updated_at": "2018-01-24 09:47:10"
    },
    {
        "id": 4,
        "name": "Ms. Maritza Wuckert PhD",
        "email": "shana86@example.net",
        "is_verified": 1,
        "role": "Client",
        "created_at": "2018-01-24 09:47:10",
        "updated_at": "2018-01-24 09:47:10"
    },
    {
        "id": 5,
        "name": "Alfred Bernhard",
        "email": "abbott.laron@example.net",
        "is_verified": 1,
        "role": "Client",
        "created_at": "2018-01-24 09:47:10",
        "updated_at": "2018-01-24 09:47:10"
    },
    {
        "id": 6,
        "name": "Mathilde Greenfelder Jr.",
        "email": "krista85@example.org",
        "is_verified": 1,
        "role": "Client",
        "created_at": "2018-01-24 09:47:10",
        "updated_at": "2018-01-24 09:47:10"
    },
    {
        "id": 7,
        "name": "Lane Waelchi",
        "email": "jody.rice@example.net",
        "is_verified": 1,
        "role": "Client",
        "created_at": "2018-01-24 09:47:10",
        "updated_at": "2018-01-24 09:47:10"
    },
    {
        "id": 8,
        "name": "Tyshawn Schmeler",
        "email": "heidi.erdman@example.com",
        "is_verified": 1,
        "role": "Client",
        "created_at": "2018-01-24 09:47:10",
        "updated_at": "2018-01-24 09:47:10"
    },
    {
        "id": 9,
        "name": "Aylin Prohaska",
        "email": "carmel.bode@example.net",
        "is_verified": 1,
        "role": "Client",
        "created_at": "2018-01-24 09:47:10",
        "updated_at": "2018-01-24 09:47:10"
    },
    {
        "id": 10,
        "name": "Nash Kshlerin",
        "email": "mittie.ebert@example.net",
        "is_verified": 1,
        "role": "Client",
        "created_at": "2018-01-24 09:47:10",
        "updated_at": "2018-01-24 09:47:10"
    },
    {
        "id": 11,
        "name": "Jerome",
        "email": "jerome@bitchest.com",
        "is_verified": 1,
        "role": "Admin",
        "created_at": null,
        "updated_at": null
    },
    {
        "id": 12,
        "name": "Eric",
        "email": "eric@eric.fr",
        "is_verified": 1,
        "role": "Client",
        "created_at": null,
        "updated_at": null
    }
]
```

### HTTP Request
`GET api/v1/users`

`HEAD api/v1/users`


<!-- END_080f3ecebb7bcc2f93284b8f5ae1ac3b -->

<!-- START_62cc83659a855b398818615e9c823ca6 -->
## User

Return a specific user

> Example request:

```bash
curl -X GET "http://localhost/api/v1/user/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/user/{id}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{}
```

### HTTP Request
`GET api/v1/user/{id}`

`HEAD api/v1/user/{id}`


<!-- END_62cc83659a855b398818615e9c823ca6 -->

<!-- START_96b8840d06e94c53a87e83e9edfb44eb -->
## Store

Add a user into database

> Example request:

```bash
curl -X POST "http://localhost/api/v1/user" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/user",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v1/user`


<!-- END_96b8840d06e94c53a87e83e9edfb44eb -->

<!-- START_747abcc0459baa513a1a4b3a20695f65 -->
## Update

Update a user

> Example request:

```bash
curl -X POST "http://localhost/api/v1/user/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/user/{id}",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v1/user/{id}`


<!-- END_747abcc0459baa513a1a4b3a20695f65 -->

<!-- START_f23e23e5a9b1d819cf366191ee8973b7 -->
## Delete

Delete a user

> Example request:

```bash
curl -X DELETE "http://localhost/api/v1/user/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/user/{id}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/v1/user/{id}`


<!-- END_f23e23e5a9b1d819cf366191ee8973b7 -->

<!-- START_fb02c31583fb6122fc260462e43c0dab -->
## Wallet

return the wallet of an user

> Example request:

```bash
curl -X GET "http://localhost/api/v1/wallet" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/wallet",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "success": true,
    "wallet": {
        "currencies": [
            {
                "id": 5,
                "name": "Cardano",
                "symbol": "ADA",
                "quantity": 54,
                "price": 3996
            },
            {
                "id": 10,
                "name": "DASH",
                "symbol": "DASH",
                "quantity": 39,
                "price": 2847
            },
            {
                "id": 9,
                "name": "IOTA",
                "symbol": "IOT",
                "quantity": 28,
                "price": 2072
            },
            {
                "id": 7,
                "name": "NEM",
                "symbol": "XEM",
                "quantity": 57,
                "price": 4560
            },
            {
                "id": 1,
                "name": "Bitcoin",
                "symbol": "BTC",
                "quantity": 54,
                "price": 3834
            }
        ],
        "total": 9175.17
    }
}
```

### HTTP Request
`GET api/v1/wallet`

`HEAD api/v1/wallet`


<!-- END_fb02c31583fb6122fc260462e43c0dab -->

