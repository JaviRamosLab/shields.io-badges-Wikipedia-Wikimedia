Wikiquote
=====================

https://wikiquote.org/


![Wikiquote Badge](https://img.shields.io/badge/Wikiquote-069?logo=wikiquote&logoColor=fff&style=flat)




## Project stats

https://stats.wikimedia.org/#/en.wikiquote.org

**API endpoints**

https://en.wikiquote.org/w/api.php?action=query&meta=siteinfo&siprop=statistics&format=json



### pages
![Wikipedia pages](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikiquote.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.pages&suffix=%20pages&logo=wikiquote&label=wikiquote%20(en)&link=https%3A%2F%2Fen.wikiquote.org%2F)

### articles
![Wikiquote articles](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikiquote.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.articles&suffix=%20articles&logo=wikiquote&label=wikiquote%20(en)&link=https%3A%2F%2Fen.wikiquote.org%2F)

### edits
![Wikiquote edits](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikiquote.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.edits&suffix=%20edits&logo=wikiquote&label=wikiquote%20(en)&link=https%3A%2F%2Fen.wikiquote.org%2F)

### images
![Wikiquote images](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikiquote.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.images&suffix=%20images&logo=wikiquote&label=wikiquote%20(en)&link=https%3A%2F%2Fen.wikiquote.org%2F)

### users
![Wikiquote users](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikiquote.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.users&suffix=%20users&logo=wikiquote&label=wikiquote%20(en)&link=https%3A%2F%2Fen.wikiquote.org%2F)

### activeusers
![Wikiquote activeusers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikiquote.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.activeusers&suffix=%20activeusers&logo=wikiquote&label=wikiquote%20(en)&link=https%3A%2F%2Fen.wikiquote.org%2F)

### admins
![Wikiquote admins](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikiquote.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.admins&suffix=%20admins&logo=wikiquote&label=wikiquote%20(en)&link=https%3A%2F%2Fen.wikiquote.org%2F)

## User stats

**API endpoints**

https://xtools.wmcloud.org/api

https://xtools.wmcloud.org/api/user/namespace_totals/eo.wikiquote.org/Radioamatoro


**Count the number of edits a user has made in a category.**
```
/api/user/category_editcount/{project}/{username}/{categories}/{start}/{end}
```

category names: Esperanto
https://xtools.wmcloud.org/api/user/category_editcount/eo.wikiquote.org/Radioamatoro/Esperanto/2010-01-01/2025-01-31

category names: Esperanto, Kubo
https://xtools.wmcloud.org/api/user/category_editcount/eo.wikiquote.org/Radioamatoro/Esperanto|Kubo/2010-01-01/2025-01-31

**Get the number of edits made by the user to each namespace.**

```
/api/user/namespace_totals/{project}/{username}
```

https://xtools.wmcloud.org/api/user/namespace_totals/eo.wikiquote.org/Radioamatoro

**Count the number of pages created by a user.**
```
/api/user/pages_count/{project}/{username}/{namespace}/{redirects}/{deleted}/{start}/{end}
```


all namespaces include redirects.
https://xtools.wmcloud.org/api/user/pages_count/eo.wikiquote.org/Radioamatoro/all/all/live/2010-01-01/2025-01-31

all namespaces exclude redirects.
https://xtools.wmcloud.org/api/user/pages_count/eo.wikiquote.org/Radioamatoro/all/noredirects/live/2010-01-01/2025-01-31

**API endpoint for the Simple Edit Counter.**
```
/api/user/simple_editcount/{project}/{username}/{namespace}/{start}/{end}
```

https://xtools.wmcloud.org/api/user/simple_editcount/eo.wikiquote.org/Radioamatoro/0/2010-01-01/2025-01-31

all namespaces
https://xtools.wmcloud.org/api/user/simple_editcount/eo.wikiquote.org/Radioamatoro/all/2010-01-01/2025-01-31

**Get the most-edited pages by a user.**
```
/api/user/top_edits/{project}/{username}/{namespace}/{start}/{end}
```

https://xtools.wmcloud.org/api/user/top_edits/eo.wikiquote.org/Radioamatoro/all/2010-01-01/2025-01-31?pagination=10


## Language projects
Many other wikiquotes are available; some of the largest are listed below.
https://meta.wikimedia.org/wiki/List_of_Wikiquotes

## license
[![licensebuttons by-sa](https://licensebuttons.net/l/by-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0)
