//////////////////////////////////////////////////////////////
//                                                          //
//                           Barbajs                        //
//                                                          //
//////////////////////////////////////////////////////////////
barba.use(barbaCss);

barba.init({
  transitions: [{
    name: 'push-left',
    from: {
      namespace: ['page4', 'page0']
    },
    to: {
      namespace: ['page5', 'page4']
    },
    sync: true,
    once() {},
    leave() {},
    enter() {},
  }, {
    name: 'push-right',
    from: {
      namespace: ['page5']
    },
    to: {
      namespace: ['page4']
    },
    sync: true,
    once() {},
    leave() {},
    enter() {},
  }]
});

//////////////////////////////////////////////////////////////
//                                                          //
//                      Navigation Bar                      //
//                                                          //
//////////////////////////////////////////////////////////////

// document.querySelector('#main-nav').innerHTML = 
// '<nav>' +    
//   '<div class="burger">' +
//     '<div class="bar bar1"></div>' +
//     '<div class="bar bar2"></div>' +
//     '<div class="bar bar3"></div>' +
//   '</div>' +
//   '<div class="user-circle"></div>' +       
// '</nav>';

// document.querySelector('#main-tabs').innerHTML = 
// '<footer>' +
// '  <div class="tabs">' +
// '    <div class="tab tab-home">' +
// '      <i class="fas fa-columns"></i>' +
// '      <p class="tab-label">Home</p>' +
// '    </div>' +
// '    <div class="tab tab-friends">' +
// '      <i class="fas fa-user-friends"></i>' +
// '      <p class="tab-label">Friends</p>' +
// '    </div>' +
// '    <div class="tab tab-stats">' +
// '      <i class="fas fa-chart-line"></i>' +
// '      <p class="tab-label">Stats</p>' +
// '    </div>' +
// '  </div>' +
// '</footer>'
