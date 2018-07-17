# MarkdownView

This is MarkdownView for Android.

# Screenshots
![img](images/1.png)
![img](images/2.png)
![img](images/3.png)
![img](images/4.png)

# Usage
1. Add following to root `build.gradle`
```groovy
allprojects {
	repositories {
		...
		maven { url 'https://jitpack.io' }
	}
}
```

2. Add the dependency to `build.gradle`
```groovy
...
dependencies {
  implementation 'com.github.KosukeTakahashi:markdownview:v1.0.0'
}
...
```

3. Use
```xml
...
<jp.dev.kosuke.markdownview.MarkdownView
        android:id="@+id/markdown"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:padding="16dp"/>
...
```

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_main)

  val md = """
      # Foo
      Bar
      **Baz**
      ...
  """.trimIndent()
  markdown.render(md)
}
```

# TODO
- [ ] Custom CSS

# License
Copyright (c) 2018 Kosuke Takahashi
MIT License

---

Copyright 2018 Kosuke Takahashi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Libraries
Using following libraries:
- [marked.js](https://github.com/markedjs/marked)
