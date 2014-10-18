# nugget

minimalist wget clone written in node. HTTP GETs a file and streams it into a file in the current working directory

[![NPM](https://nodei.co/npm/nugget.png?global=true)](https://nodei.co/npm/nugget/)
![dat](http://img.shields.io/badge/Development%20sponsored%20by-dat-green.svg?style=flat)

## installation

```
npm install nugget -g
```

## usage

```
nugget http://foo.com/bar.jpg
# downloads bar.jpg and stores it in the current directory
```

or

```
nugget http://foo.com/bar.jpg -O baz.jpg
# saves it as baz.jpg. you can also do lowercase -o
```

if you get a statusCode of 300 or greater nugget will stop. you can force it to stream the response into a file anyway by doing `nugget http://404link.com/file.html -f` or `--force` works too