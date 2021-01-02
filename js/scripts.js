var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};


//======================SUBSCRIBED=============================
var subVideos =[
  {
    img :'img/video-img-1.jpg',
    imgx:'img/video-img-1@2x.jpg',
    title:'A Brief History Of Creation',
    views:'80k views',
    day : '30 days ago',
    owner: 'Dollie Blair',
    duration:'4:15',
    watchLater: false,
    id:0
  },

  {
    img :'img/video-img-2.jpg',
    imgx:'img/video-img-2@2x.jpg',
    title:'Selecting The Right Hotel',
    views:'123k views',
    day : '1 month ago',
    owner: 'Dollie Blair',
    duration:'8:00',
    watchLater: false,
    id : 1
  },

  {
    img :'img/video-img-3.jpg',
    imgx:'img/video-img-3@2x.jpg',
    title:'Asteroids',
    views:'43k views',
    day : '12 days ago',
    owner: 'Dollie Blair',
    duration:'9:45',
    watchLater: false,
    id:2
  },
  {
    img :'img/video-img-4.jpg',
    imgx:'img/video-img-4@2x.jpg',
    title:'Telescopes 101',
    views:'18k views',
    day : '2 days ago',
    owner: 'Dollie Blair',
    duration:'9:45',
    watchLater: false,
    id :3
  },

  {
    img :'img/video-img-5.jpg',
    imgx:'img/video-img-5@2x.jpg',
    title:'Medical Care Is Just',
    views:'18k views',
    day : '2 days ago',
    owner: 'Dollie Blair',
    duration:'9:45',
    watchLater: false,
    id: 4
  },
  {
    img :'img/video-img-6.jpg',
    imgx:'img/video-img-6@2x.jpg',
    title:'Moon Gazing',
    views:'18k views',
    day : '2 days ago',
    owner: 'Dollie Blair',
    duration:'9:45',
    watchLater: false,
    id: 5
  }
];

//=======================RECOMMENDED=========================
var recVideos = [
  {
    img :'img/recommend-img-1.jpg',
    imgx:'img/recommend-img-1@2x.jpg',
    title:'Moon Gazing',
    views:'18k views',
    day : '2 days ago',
    owner: 'Gussie French',
    duration:'9:45',
    watchLater: false,
    id: 0
  },
  {
    img :'img/recommend-img-2.jpg',
    imgx:'img/recommend-img-2@2x.jpg',
    title:'Moon Gazing',
    views:'18k views',
    day : '2 days ago',
    owner: 'Edward Osborne',
    duration:'9:45',
    watchLater: false,
    id: 1
  },
  {
    img :'img/recommend-img-3.jpg',
    imgx:'img/recommend-img-3@2x.jpg',
    title:'Moon Gazing',
    views:'18k views',
    day : '2 days ago',
    owner: 'Dollie Blair',
    duration:'9:45',
    watchLater: false,
    id: 2
  }
];
//===============================FOOD==============================
var channelVideos =[
  {
    img :'img/food-img-1.jpg',
    imgx:'img/food-img-1@2x.jpg',
    title:'A Brief History Of Creation',
    views:'80k views',
    day : '30 days ago',
    owner: 'Dollie Blair',
    duration:'4:15',
    watchLater: false,
    id: 0
  },

  {
    img :'img/food-img-2.jpg',
    imgx:'img/food-img-2@2x.jpg',
    title:'Selecting The Right Hotel',
    views:'123k views',
    day : '1 month ago',
    owner: 'Dollie Blair',
    duration:'8:00',
    watchLater: false,
    id: 1
  },

  {
    img :'img/food-img-3.jpg',
    imgx:'img/food-img-3@2x.jpg',
    title:'Asteroids',
    views:'43k views',
    day : '12 days ago',
    owner: 'Dollie Blair',
    duration:'9:45',
    watchLater: false,
    id: 2
  },
  {
    img :'img/food-img-4.jpg',
    imgx:'img/food-img-4@2x.jpg',
    title:'Telescopes 101',
    views:'18k views',
    day : '2 days ago',
    owner: 'Dollie Blair',
    duration:'9:45',
    watchLater: false,
    id: 3
  },

  {
    img :'img/food-img-5.jpg',
    imgx:'img/food-img-5@2x.jpg',
    title:'Medical Care Is Just',
    views:'18k views',
    day : '2 days ago',
    owner: 'Dollie Blair',
    duration:'9:45',
    watchLater: false,
    id: 4
  },
  {
    img :'img/food-img-6.jpg',
    imgx:'img/food-img-6@2x.jpg',
    title:'Moon Gazing',
    views:'18k views',
    day : '2 days ago',
    owner: 'Dollie Blair',
    duration:'9:45',
    watchLater: false,
    id: 5
  }
];



var watchLater = [];

var elRecList = document.querySelector('.recommended__list');
var elChannelList = document.querySelector('.channel__list');
var elSubList = document.querySelector('.subscribed__list');
var elLaterList = document.querySelector('.later__list');

var elRecTemplate = document.querySelector('.recommended-template').content;
var elChannelTemplate = document.querySelector('.channel-template').content;
var elSubTemplate = document.querySelector('.subscribed-template').content;
var elLaterTemplate = document.querySelector('.later-template').content;


var subFragment = document.createDocumentFragment();
subVideos.forEach(function (subVideo , index) {
  var subItem= elSubTemplate.cloneNode(true);
  $_('.subscribed__img', subItem).src = subVideo.img;
  $_('.subscribed__img', subItem).srcset = `${subVideo.img} 1x, ${subVideo.imgx} 2x`;
  $_('.subscribed__video-heading', subItem).textContent = subVideo.title;
  $_('.subscribed__video-view', subItem).textContent = subVideo.views;
  $_('.subscribed__video-day', subItem).textContent = subVideo.day;
  $_('.subscribed__video-owner', subItem).textContent = subVideo.owner;
  $_('.subscribed__video-time', subItem).textContent = subVideo.duration;
  $_('.later-button', subItem).dataset.id = index;

  subFragment.appendChild(subItem);

})
elSubList.appendChild(subFragment);

var recFragment = document.createDocumentFragment();
recVideos.forEach(function (recVideo , index) {
  var recItem= elRecTemplate.cloneNode(true);

  $_('.recommended__img', recItem).src = recVideo.img;
  $_('.recommended__img', recItem).srcset = `${recVideo.img} 1x, ${recVideo.imgx} 2x`;
  $_('.recommended__video-heading', recItem).textContent = recVideo.title;
  $_('.recommended__video-view', recItem).textContent = recVideo.views;
  $_('.recommended__video-day', recItem).textContent = recVideo.day;
  $_('.recommended__video-owner', recItem).textContent = recVideo.owner;
  $_('.recommended__video-time', recItem).textContent = recVideo.duration;
  $_('.later-button', recItem).dataset.id = index;

  recFragment.appendChild(recItem);

})
elRecList.appendChild(recFragment);

var channelFragment = document.createDocumentFragment();
channelVideos.forEach(function (channelVideo , index) {
  var channelItem= elChannelTemplate.cloneNode(true);

  $_('.channel__img', channelItem).src = channelVideo.img;
  $_('.channel__img', channelItem).srcset = `${channelVideo.img} 1x, ${channelVideo.imgx} 2x`;
  $_('.channel__video-heading', channelItem).textContent = channelVideo.title;
  $_('.channel__video-view', channelItem).textContent = channelVideo.views;
  $_('.channel__video-day', channelItem).textContent = channelVideo.day;
  $_('.channel__video-owner', channelItem).textContent = channelVideo.owner;
  $_('.channel__video-time', channelItem).textContent = channelVideo.duration;
  $_('.later-button', channelItem).dataset.id = index;

  channelFragment.appendChild(channelItem);

})
elChannelList.appendChild(channelFragment);

var laterFunction = function(){
  elLaterList.innerHTML = "";
  var laterFragment = document.createDocumentFragment();
    watchLater.forEach(function (laterVideo , index) {
      var laterItem= elLaterTemplate.cloneNode(true);

      $_('.later__img', laterItem).src = laterVideo.img;
      $_('.later__img', laterItem).srcset = `${laterVideo.img} 1x, ${laterVideo.imgx} 2x`;
      $_('.later__video-heading', laterItem).textContent = laterVideo.title;
      $_('.later__video-view', laterItem).textContent = laterVideo.views;
      $_('.later__video-day', laterItem).textContent = laterVideo.day;
      $_('.later__video-owner', laterItem).textContent = laterVideo.owner;
      $_('.later__video-time', laterItem).textContent = laterVideo.duration;
      $_('.later-button', laterItem).dataset.id = index;

      laterFragment.appendChild(laterItem);

    })
    elLaterList.appendChild(laterFragment);
}


elChannelList.addEventListener('click', function (evt){
  if(evt.target.matches('.later-button')){
    var buttonId = Number(evt.target.dataset.id);

    channelVideos.forEach(function(channelItem){
      if(channelItem.id === buttonId){
        watchLater.push(channelItem)
      }
    })
    laterFunction();
  }
})
elRecList.addEventListener('click', function (evt){
  if(evt.target.matches('.later-button')){
    var buttonId = Number(evt.target.dataset.id);

    recVideos.forEach(function(recItem){
      if(recItem.id === buttonId){
        watchLater.push(recItem)
      }
    })
    laterFunction();
  }
})

elSubList.addEventListener('click', function (evt){
  if(evt.target.matches('.later-button')){
    var buttonId = Number(evt.target.dataset.id);

    subVideos.forEach(function(subItem){
      if(subItem.id === buttonId){
        watchLater.push(subItem)
      }
    })
    laterFunction();
  }
})

elLaterList.addEventListener('click', function (evt){
  if(evt.target.matches('.later-button')){
    var buttonId = Number(evt.target.dataset.id);
    watchLater.splice(buttonId, 1);

    laterFunction();
  }
})
