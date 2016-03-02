cp node_modules deploy/node_modules

#Remove unnecesary files & folders (reduce 106 MB -> 84 MB )

find deploy/node_modules -iname 'examples' -exec rm -r {} \;

find deploy/node_modules -iname 'docs' -exec rm -r {} \;

find deploy/node_modules -iname 'test' -exec rm -r {} \;

find deploy/node_modules -iname '*.md' -exec rm {} \;

find deploy/node_modules -iname 'License*' -exec rm {} \;

find deploy/node_modules -iname 'changelog' -exec rm {} \;

find deploy/node_modules -iname 'readme*' -exec rm {} \;

# Compact all .js files
# node_modules
find node_modules/winston -iname '*.js' -exec uglifyjs --compress --mangle -o {} -- {} \;


# Vulcanize

# vulcanize --inline-css --inline-scripts reporte.html > reporte2.html


