Wikipedia
=====================

https://wikipedia.org/

aktiva + mediawiki version + ...

https://img.shields.io/website?down_message=down&label=Web&up_message=active&url=https%3A%2F%2Fwikipedia.org


![Wikipedia Badge](https://img.shields.io/badge/Wikipedia-000?logo=wikipedia&logoColor=fff&style=flat)

## Descriptions and statistics
https://meta.wikimedia.org/wiki/Wikipedia

## Project stats

https://stats.wikimedia.org/#/en.wikipedia.org

### Badges

**API endpoints**

https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=statistics&format=json



### pages
![Wikipedia pages](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikipedia.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.pages&suffix=%20pages&logo=wikipedia&label=wikipedia%20(en)&link=https%3A%2F%2Fen.wikipedia.org%2F)

### articles
![Wikipedia articles](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikipedia.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.articles&suffix=%20articles&logo=wikipedia&label=wikipedia%20(en)&link=https%3A%2F%2Fen.wikipedia.org%2F)

### edits
![Wikipedia edits](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikipedia.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.edits&suffix=%20edits&logo=wikipedia&label=wikipedia%20(en)&link=https%3A%2F%2Fen.wikipedia.org%2F)

### images
![Wikipedia images](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikipedia.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.images&suffix=%20images&logo=wikipedia&label=wikipedia%20(en)&link=https%3A%2F%2Fen.wikipedia.org%2F)

### users
![Wikipedia users](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikipedia.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.users&suffix=%20users&logo=wikipedia&label=wikipedia%20(en)&link=https%3A%2F%2Fen.wikipedia.org%2F)

### activeusers
![Wikipedia activeusers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikipedia.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.activeusers&suffix=%20activeusers&logo=wikipedia&label=wikipedia%20(en)&link=https%3A%2F%2Fen.wikipedia.org%2F)

### admins
![Wikipedia admins](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fen.wikipedia.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dsiteinfo%26siprop%3Dstatistics%26format%3Djson&query=%24.query.statistics.admins&suffix=%20admins&logo=wikipedia&label=wikipedia%20(en)&link=https%3A%2F%2Fen.wikipedia.org%2F)

## User stats

**API endpoints**

https://xtools.wmcloud.org/api

https://xtools.wmcloud.org/api/user/namespace_totals/eo.wikipedia.org/Radioamatoro


**Count the number of edits a user has made in a category.**
```
/api/user/category_editcount/{project}/{username}/{categories}/{start}/{end}
```

category names: Esperanto
https://xtools.wmcloud.org/api/user/category_editcount/eo.wikipedia.org/Radioamatoro/Esperanto/2010-01-01/2025-01-31

category names: Esperanto, Kubo
https://xtools.wmcloud.org/api/user/category_editcount/eo.wikipedia.org/Radioamatoro/Esperanto|Kubo/2010-01-01/2025-01-31

**Get the number of edits made by the user to each namespace.**

```
/api/user/namespace_totals/{project}/{username}
```

https://xtools.wmcloud.org/api/user/namespace_totals/eo.wikipedia.org/Radioamatoro

**Get global edits made by a user, IP or IP range.**
<!-- 50 last redactions -->
```
/api/user/globalcontribs/{username}/{namespace}/{start}/{end}/{offset}
```

https://xtools.wmcloud.org/api/user/globalcontribs/Radioamatoro/all/2010-01-01/2025-01-31/

**Count the number of pages created by a user.**
```
/api/user/pages_count/{project}/{username}/{namespace}/{redirects}/{deleted}/{start}/{end}
```


all namespaces include redirects.
https://xtools.wmcloud.org/api/user/pages_count/eo.wikipedia.org/Radioamatoro/all/all/live/2010-01-01/2025-01-31

all namespaces exclude redirects.
https://xtools.wmcloud.org/api/user/pages_count/eo.wikipedia.org/Radioamatoro/all/noredirects/live/2010-01-01/2025-01-31

**API endpoint for the Simple Edit Counter.**
```
/api/user/simple_editcount/{project}/{username}/{namespace}/{start}/{end}
```
https://xtools.wmcloud.org/api/user/simple_editcount/eo.wikipedia.org/Radioamatoro/0/2010-01-01/2025-01-31

all namespaces
https://xtools.wmcloud.org/api/user/simple_editcount/eo.wikipedia.org/Radioamatoro/all/2010-01-01/2025-01-31

**Get the most-edited pages by a user.**
```
/api/user/top_edits/{project}/{username}/{namespace}/{start}/{end}
```
https://xtools.wmcloud.org/api/user/top_edits/eo.wikipedia.org/Radioamatoro/all/2010-01-01/2025-01-31?pagination=10

---

### Ramdom article

### Ramdom category



## All wikipedias (334 languages)

## All logos in each language
https://meta.wikimedia.org/wiki/Wikipedia_logo_in_each_language

## RSS



## List of Wikipedias by
https://meta.wikimedia.org/wiki/List_of_Wikipedias_by_edits_per_article
https://meta.wikimedia.org/wiki/List_of_Wikipedias_by_country
https://meta.wikimedia.org/wiki/Wikipedia_featured_articles

## Language code
https://meta.wikimedia.org/wiki/Special:SiteMatrix

## Language projects
Many other Wikipedias are available; some of the largest are listed below.
https://meta.wikimedia.org/wiki/List_of_Wikipedias

## License
[![licensebuttons by-sa](https://licensebuttons.net/l/by-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0)
