Programming Needs and Installations
===============
##Table of Content

* [Sublime Text](#sublime-text)
* [Bash](#bash)
* [Brew](#brew)
* [Pyenv](#pyenv)
* [Anaconda](#anaconda)
* [Markdown](#markdown)
* [Other useful Apps](#chrome)


#### Sublime Text

* [Download](http://www.sublimetext.com/3)
* Package Control: Paste this into console(``ctrl+` ``)

```python3
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

* Add alias to enable `subl your_file`

#### Bash
All should be put into *.bash_profile*

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



#### Pyenv

* Put these in .bash_profile
```bash
	eval "$(pyenv init -)"
	eval "$(pyenv virtualenv-init -)"
```

#### ANACONDA

* [Download](https://www.continuum.io/downloads) 
* [Quick Start](http://conda.pydata.org/docs/test-drive.html)



#### Markdown

* [Cheatsheet](./Markdown-Cheatsheet.md)
* [Github Guides](https://guides.github.com/features/mastering-markdown/)
* [Emoji](http://www.emoji-cheat-sheet.com/)
* The editor [Mou](http://www.pc6.com/mac/114406.html)

#### Chrome
#### XCode
#### Sketch
#### Photoshop
#### Skype
