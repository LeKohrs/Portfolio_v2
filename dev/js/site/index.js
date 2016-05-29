window.onload = setupDom;


function setupDom() {
    //Build icon animation
    var buildIcon = document.getElementsByClassName('build__icons')[0];
    var buildDoc = buildIcon.contentDocument;

    var buildMobile = buildDoc.getElementById('buildMobile');
    var buildDesk = buildDoc.getElementById('buildDesk');

    var tl = new TimelineMax({repeat: -1});
    tl.to(buildDesk, .8, {y: -200, alpha: 0, ease: Power4.easeOut,}, '+7')
        .to(buildMobile, .8, {y: 0, ease: Power4.easeOut}, '+7')
        .to(buildDesk, .01, {y: 200})
        .to(buildDesk, .8, {y: 0, alpha: 1, ease: Power4.easeOut,}, '+14')
        .to(buildMobile, .8, {y: -200, ease: Power4.easeOut,}, '+14');

    //Move icon animation
    var moveIcon = document.getElementsByClassName('move__icons')[0];
    var moveDoc = moveIcon.contentDocument;

    var moveCss = moveDoc.getElementById('moveCss');
    var moveJs = moveDoc.getElementById('moveJs');
    var moveAe = moveDoc.getElementById('moveAe');

    var tl = new TimelineMax({repeat: -1, delay: 1});
    tl.to(moveCss, .8, {y: 200, alpha: 0, ease: Power4.easeOut,}, '+7')
        .to(moveJs, .8, {y: 0, alpha: 1, ease: Power4.easeOut}, '+7')
        .to(moveCss, .01, {y:-200})
        .to(moveAe, .8, {y: 0, alpha: 1, ease: Power4.easeOut,}, '+14')
        .to(moveJs, .8, {y: 200, alpha: 0, ease: Power4.easeOut,}, '+14')
        .to(moveJs, .01, {y: -200})
        .to(moveCss, .8, {y: 0, alpha: 1, ease: Power4.easeOut,}, '+21')
        .to(moveAe, .8, {y: 200, ease: Power4.easeOut,}, '+21');

    //Work icon animation
    var workIcon = document.getElementsByClassName('work__icons')[0];
    var workDoc = workIcon.contentDocument;

    var codepen = workDoc.getElementById('codepen');
    var twitter = workDoc.getElementById('twitter');
    var computer = workDoc.getElementById('computer');

    var tl = new TimelineMax({repeat: -1, delay: 2});
    tl.to(computer, .8, {y: -200, alpha: 0, ease: Power4.easeOut,}, '+7')
        .to(twitter, .8, {y: 0, alpha: 1, ease: Power4.easeOut}, '+7')
        .to(computer, .01, {y: 200})
        .to(codepen, .8, {y: 0, alpha: 1, ease: Power4.easeOut,}, '+14')
        .to(twitter, .8, {y: -200, alpha: 0, ease: Power4.easeOut,}, '+14')
        .to(twitter, .01, {y: 200})
        .to(computer, .8, {y: 0, alpha: 1, ease: Power4.easeOut,}, '+21')
        .to(codepen, .8, {y: -200, ease: Power4.easeOut,}, '+21');

    //email arrow

    var arrow = document.getElementsByClassName('arrow--down')[0];
    var tl = new TimelineMax({repeat: -1});

    tl.to(arrow,.7, {y: 5})
        .to(arrow,.7, {y: 0});
}