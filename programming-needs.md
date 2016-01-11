Programming Needs for Mac Users
===============



## Intro
   
This is a summary of tools you need to do programming on OSX, and also a summary of the skill sets and tutorials that I, Jiahang Scott Zou, have been learning or will be learning.

This guide consists of basic installations and usages of those recommended tools, as well as many resources and guides for some programming knowledges.
  
This is only for educational purposes. The table of content is shown below, enjoy.


## Table of Contents


<!-- MarkdownTOC -->

- [Basic Tools](#basic-tools)
	- [Sublime Text](#sublime-text)
	- [Bash](#bash)
	- [Brew](#brew)
	- [Git](#git)
	- [Pyenv](#pyenv)
	- [ANACONDA](#anaconda)
	- [Markdown](#markdown)
- [Web Development](#web-development)
	- [Django](#django)
	- [Bootstrap](#bootstrap)
	- [Font Awesome](#font-awesome)
	- [The Noun Project](#the-noun-project)
	- [Three.js](#threejs)
	- [Ladon](#ladon)
- [Other Installations](#other-installations)
	- [jruby and Maven(mvn)](#jruby-and-mavenmvn)
	- [Sketch](#sketch)
- [Specific Tools](#specific-tools)
	- [thefuck](#thefuck)
	- [Python Tutor](#python-tutor)
	- [visualgo](#visualgo)
	- [Python Packaging](#python-packaging)
	- [Online Python IDEs](#online-python-ides)
- [Common Errors & Fixes](#common-errors--fixes)
	- [How to install with setup.py](#how-to-install-with-setuppy)
	- [Python Encoding](#python-encoding)
	- [Django RuntimeError: maximum recursion depth exceeded](#django-runtimeerror-maximum-recursion-depth-exceeded)
	- [GIT LARGE FILE in Commits](#git-large-file-in-commits)

<!-- /MarkdownTOC -->

	
	
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
##### Django Rest Framework
* ```pip install django-rest-framework```
* <http://www.django-rest-framework.org/>
* A Documentation tool that uses YAML to help: Django Rest Swagger
```pip install django-rest-swagger```


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

#### Ladon
A web-service building tool with python/php

* <http://pythonhosted.org/ladon/>
* also [django-ladon](https://github.com/TargetHolding/django-ladon).

### Other Installations

#### jruby and Maven(mvn)
* [Install](http://jruby.org/getting-started)
* Some notice:
	* brew provides version 9.0, while the newest package is 1.7.23 in my case. So I had to download it with a zip file.
	* To build the zip file, it requires [Maven](https://maven.apache.org/), which can be installed by Brew. Then build by typing `mvn`.

#### Sketch
* [Tutorials](http://leveluptuts.com/tutorials/sketch-3-tutorials)


### Specific Tools

#### thefuck
An auto-correcting tool

Installation: 
```
wget -O - https://raw.githubusercontent.com/nvbn/thefuck/master/install.sh | sh - && $0
```
#### Python Tutor
Environmental Diagram Yeah! 
<http://www.pythontutor.com/visualize.html#mode=edit>

#### visualgo
A [Site](http://visualgo.net/) that visualising data structures and algorithms through animation

#### Python Packaging

Guides:
<https://python-packaging.readthedocs.org/en/latest/index.html>  

<http://python-packaging-user-guide.readthedocs.org/en/latest/distributing/>





#### Online Python IDEs
comparisons: <http://stromberg.dnsalias.org/~strombrg/pybrowser/python-browser.html>

### Common Errors & Fixes

#### How to install with setup.py
```bash
python setup.py install
```

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

#### Django RuntimeError: maximum recursion depth exceeded

* Problem:
	when `python manage.py migrate`, a RuntimeError involving
	```bash
	File "/Users/XXXX/.pyenv/versions/2.7/lib/python2.7/functools.py", line 56, in <lambda>
	``` 
	happened.
	
* Fix: <http://stackoverflow.com/questions/15236556/django-runtimeerror-maximum-recursion-depth-exceeded>

#### GIT LARGE FILE in Commits
* Problem: 
```bash
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
remote: error: Trace: 505ee463747f5c5b151e80f30703acf0
remote: error: See http://git.io/iEPt8g for more information.
remote: error: File XXXXX.pdf is 118.71 MB; this exceeds GitHub's file size limit of 100.00 MB
To https://github.com/scottjzou/XXXXXX.git
```
* Fix: this remove the file from commit. <http://stackoverflow.com/questions/21168846/cant-remove-file-from-git-commit>
* Did not seem to work, ended up by removing the local git and re-init and then merge the branches. PUSH OFTEN and beware of the big files in git.