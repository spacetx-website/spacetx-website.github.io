# spacetx-website.github.io

## How to build website locally

1. Install required packages
```
pip install sphinx recommonmark
```

2. Build website.
```
sphinx-build src build
```

## How to add a new page

1. Add a new document in `src/`. The file format can be either `rst` or `md`. 
2. Open `src/_template/layout.html`. Go to line 35. Append a new link there (put document file name without extension).
3. Add a link to `src/toctree.rst`.

## How to add a new topic or example

1. Add a new document in `src/topics` or `src/examples`. The file format can be either `rst` or `md`. 
2. Done! The document will be automatically published soon.
