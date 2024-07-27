var sites = [
    'facebook',
    'twitter',
    'google',
    'dribbble',
    'skype'
  ];
  
  var container = document.querySelector('.social-btns');
  sites.forEach(function(site) {
    var a = document.createElement('a');
    a.href = '#';
    a.className = 'btn ' + site;
    
    var i = document.createElement('i');
    i.className = 'fa fa-' + site;
    
    a.appendChild(i);
    container.appendChild(a);
  });
  