var style = null

function renderMarkdown(content) {
    progressBar.show()

    let callback = (err, out) => {
        progressBar.hide()
        rendererCallback.onRenderFinished()

        console.log('Loading CSS... :: ' + style)
        if (style) {
            let cssElem = document.createElement('style')
            cssElem.type = 'text/css'
            cssElem.innerHTML = style
            document.head.appendChild(cssElem)
        }

        if (err)
            return err
        else
            return out
    }

    let markdownContent = document.querySelector('#markdown_content')

    let parsed = content.replace(new RegExp('\\\\\\(', 'g'), "<intex>")
                        .replace(new RegExp('\\\\\\)', 'g'), "</intex>")
                        .replace(new RegExp('\\\\\\[', 'g'), "<dtex>")
                        .replace(new RegExp('\\\\\\]', 'g'), "</dtex>")

    let html = marked(parsed, null, callback)

    let parsedHtml = html.replace(new RegExp('<intex>', 'g'), "\\(")
                         .replace(new RegExp('</intex>', 'g'), "\\)")
                         .replace(new RegExp('<dtex>', 'g'), "\\[")
                         .replace(new RegExp('</dtex>', 'g'), "\\]")

    markdownContent.innerHTML = parsedHtml

    console.log("markdown parsed =>\n" + parsedHtml)

    MathJax.Hub.Typeset(markdownContent, () => {})
    let elems = document.querySelectorAll('code')
    for (elem of elems) {
        hljs.highlightBlock(elem)
    }
}

function loadCss(css) {
    console.log('====loadCss called====')

    style = css

    let cssElem = document.createElement('style')
    cssElem.type = 'text/css'
    cssElem.innerHTML = css
    document.head.appendChild(cssElem)
}
