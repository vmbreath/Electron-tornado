#!/usr/bin/env python
#
# Copyright 2009 Facebook
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.
import json
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import asyncio

from tornado.options import define, options

define("port", default=8888, help="run on the given port", type=int)



class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")
        self.set_header("Access-Control-Allow-Origin", "*")


class resourceRequestHandler(tornado.web.RequestHandler):
    def get(self, id):
        self.write("Querying tweet with id "+ id)
        self.set_header("Access-Control-Allow-Origin", "*")


class staticRequestHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")
        self.set_header("Access-Control-Allow-Origin", "*")

class queryStringRequestHandler(tornado.web.RequestHandler):
    def get(self):
        n=int(self.get_argument("n"))
        r="odd" if n%2 else "even"

        self.write("the number " + str(n)+ " is "+r)
        self.set_header("Access-Control-Allow-Origin", "*")


class calculateSum(tornado.web.RequestHandler):
    def post(self):
        data = json.loads(self.request.body.decode('utf-8'))
        print('Got JSON data:', data)
        self.write({ 'result' : data["x"]+data["y"] })
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Content-Type", "application/json")

    def options(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "*")


class calculateDecrease(tornado.web.RequestHandler):
    def post(self):
        data = json.loads(self.request.body.decode('utf-8'))
        print('Got JSON data:', data)
        self.write({ 'result' : data["x"]-data["y"] })
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Content-Type", "application/json")

    def options(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "*")

class calculateMultiply(tornado.web.RequestHandler):
    def post(self):
        data = json.loads(self.request.body.decode('utf-8'))
        print('Got JSON data:', data)
        self.write({ 'result' : data["x"]*data["y"] })
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Content-Type", "application/json")

    def options(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "*")

class calculateDivide(tornado.web.RequestHandler):
    def post(self):
        data = json.loads(self.request.body.decode('utf-8'))
        print('Got JSON data:', data)
        self.write({ 'result' : data["x"]/data["y"] })
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Content-Type", "application/json")

    def options(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "*")

def main():
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    tornado.options.parse_command_line()
    application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/page", staticRequestHandler),
    (r"/isEven", queryStringRequestHandler),
    (r"/sum", calculateSum),
    (r"/dec", calculateDecrease),
    (r"/mult", calculateMultiply),
    (r"/divide", calculateDivide),
    (r"/tweet/([0-9]+)", resourceRequestHandler),
    ])
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    main()
