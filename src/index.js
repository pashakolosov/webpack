import $ from "jquery"
import "normalize.css"
import Post from '@models/Post'
import '@style/style.css'
import json from '@assets/json'
import xml from '@assets/data.xml'
import csv from '@assets/data.csv'
import logo from '@assets/webpack-logo.png'
import "@assets/fonts/Roboto-Regular.ttf"


const post = new Post('webpack', logo);

$('pre').html(post.toString())

console.log(post.toString())
console.log('Json', json)
console.log('XML', xml)
console.log('csv', csv)