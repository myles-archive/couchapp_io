"""
HUGE FREAKING WARNING.

This script sucks and shouldn't ever be used.
"""

import httplib2
import datetime
import urllib

try:
	import json
except ImportError:
	import simplejson as json

urls = []
page = 1

while True:
	h = httplib2.Http()
	response, content = h.request("http://bit.ly/u/myles.json?page=%s" % page)
	
	data = json.loads(content)
	
	if not data['data']:
		break
	
	for url in data['data']:
		key = url['short_url'].split('/')[-1]
		target = url['url']
		date = datetime.datetime.utcfromtimestamp(url['created']).isoformat()
		urls += [{'_id': key, 'target': target, 'date': date}]
	
	page += 1

couchdb_format = {'docs': urls}

print json.dumps(couchdb_format)