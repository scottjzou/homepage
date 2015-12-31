Programming Needs for Mac Users
===============
##Intro
   
This is a summary of tools you need to do programming on OSX, and also a summary of the skill sets and tutorials that I, Jiahang Scott Zou, have been learning or will be learning.   

This guide consists of basic installations and usages of those recommended tools, as well as many resources and guides for some programming knowledges.
  
This is only for educational purposes. The table of content is shown below, enjoy.


##Table of Contents

* Programming Tools
	* [Sublime Text](#sublime-text)
	* [Bash](#bash)
	* [Brew](#brew)
	* [Git](#git)
	* [Pyenv](#pyenv)
	* [Anaconda](#anaconda)
	* [Markdown](#markdown)
* Web Development
	* [Django](#django)
	* [Bootstrap](#bootstrap)
	* [Font Awesome](#font-awesome)
	* [The Noun Project](#the-noun-project)
* [Other useful Apps](#sketch)
* Specific Tools
	* [Visualgo](#visualgo)
	* [Python Packaging](#python-packaging)
* Common Error Fixes
	* [Python Encoding](#python-encoding)
	
	
### Basic Tools

#### Sublime Text

* [Download](http://www.sublimetext.com/3)
* Package Control: Paste this into console(``ctrl+` ``)

```python3
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

* Add alias to enable `subl your_file`

#### Bash
All should be put into *.bash_profile*  

Use `vi ~/.bash_profile` to edit the file.

* [Editing bash shell prompt (PS1)](http://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html)
`export PS1='\n[\u \W]'`
	
* Sublime Alias ```alias subl="/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl"```


#### Brew

* Installation	
```ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/masteall)"```

* Usage 
```bash
brew install package_name
```
* Update `brew update`

#### Git
Should be included in xcode command line tools.
* [Simple Guide](http://rogerdudler.github.io/git-guide/)
* [Medium Guide](https://www.atlassian.com/git/tutorials/)
* [Very Complete](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide)


#### Pyenv

The Python specific virtualenv, recommending using Anaconda

* Installation 
```
brew install pyenv
brew install pyenv-virtualenv
brew install pyenv-pip-migrate
```
* Put these in .bash_profile
```bash
	eval "$(pyenv init -)"
	eval "$(pyenv virtualenv-init -)"
```
* Usage
```
pyenv install 3.5.0 (installing this python version)
pyenv virtualenv 3.5.0 your_environment (installing this virtual environment using this python version)
pyenv local your_environment (set this folder to use this virtualenv, so everytime enter this folder will begin run python in this environment)
```

#### ANACONDA

* [Download](https://www.continuum.io/downloads) 
* [Quick Start](http://conda.pydata.org/docs/test-drive.html)

#### Markdown

* [Cheatsheet](./Markdown-Cheatsheet.md)
* [Github Guides](https://guides.github.com/features/mastering-markdown/)
* [Emoji](http://www.emoji-cheat-sheet.com/)
* The editor [Mou](http://www.pc6.com/mac/114406.html)

### Web Development

#### Django
* Download (using pip)
* [Documentation](https://docs.djangoproject.com/en/1.9/)

#### Bootstrap
* [Getting Started](http://getbootstrap.com/getting-started/)
* [Components](http://getbootstrap.com/components/)
* [CSS](http://http://getbootstrap.com/css/)
* [JS](http://getbootstrap.com/javascript/)

#### Font Awesome
* [Getting Started](http://fortawesome.github.io/Font-Awesome/get-started/)
* [Icons](http://fortawesome.github.io/Font-Awesome/icons/)

#### The Noun Project
* [Icons](https://thenounproject.com/)

#### Three.js
* [Guide(Chinese)](http://www.hewebgl.com/article/articledir/1)

#### Sketch
* [Tutorials](http://leveluptuts.com/tutorials/sketch-3-tutorials)


###Specific Tools

#### thefuck
An auto-correcting tool

Installation: 
```
wget -O - https://raw.githubusercontent.com/nvbn/thefuck/master/install.sh | sh - && $0
```

#### visualgo
A [Site](http://visualgo.net/) that visualising data structures and algorithms through animation

#### Python Packaging

Guides:
<https://python-packaging.readthedocs.org/en/latest/index.html>  

<http://python-packaging-user-guide.readthedocs.org/en/latest/distributing/>

### Common Errors

#### Python Encoding
* Fix:
```python
your_str.encode('utf-8')
```
or
```python
def to_bytestring (s, enc='utf-8'):
    """Convert the given unicode string to a bytestring, using the standard encoding,
    unless it's already a bytestring"""
    if s:
        if isinstance(s, str):
            return s
        else:
            return s.encode(enc)
```
* Readings: <https://docs.python.org/2/howto/unicode.html>
