// ===========================================
//  Carousel Builder v2.1 PB June 25th
// ===========================================

  if(!dfs) {
    var dfs = {};
  }

  dfs.HPSlider = {
    visualID: $('.js_banner_wrap').data('visualid'),
    isROI: $('.js_banner_wrap').data('roi'),
    maxSlides: $('.js_banner_wrap').data('maxslides') || 5
  }

    var cacheBuster = Math.random().toString(36).substr(2, 12),
        dfsSliderID = dfs.HPSlider.visualID;

    console.log('Fetching: contentID:', dfsSliderID);

    var masterDeliveryUrl = '//c1.adis.ws/cms/content/query?fullBodyObject=true&query=%7B"sys.iri"%3A"http%3A%2F%2Fcontent.cms.amplience.com%2F'+ dfsSliderID +'"%7D&scope=tree&store=dfs&cacheBuster=' + cacheBuster;

    // create and issue the content delivery request
      var masterRequest = $.ajax({
        url: masterDeliveryUrl,
      });

      masterRequest
      .done(function(data){
        console.log('Ajax Request Data Fetch : Done', dfsSliderID);
        renderContent(data);

      })
      .fail(function(){
        console.log('Failed To Get Master ID Data');
        showErrorMessage();
      }).always(function(){
        console.log('AJAX Has Completed', dfsSliderID);
      });

function renderContent(data) {
// use the Amplience CMS JavaScript SDK to manipulate the JSON-LD into a content tree
var contentTree = amp.inlineContent(data)[0];
  // console.log('CTS',contentTree.slides);
  if(contentTree.slides.length > dfs.HPSlider.maxSlides) {
    contentTree.slides.length = dfs.HPSlider.maxSlides;
  }
    contentTree.spec = {"roiPrices": dfs.HPSlider.isROI, "testDate" : contentTree.testDate};

if (contentTree) {
  renderCarousel(contentTree);
  }
}

function renderCarousel(contentTree) {
  var template = Handlebars.template(AmpCa.templates.bannerMulti);
  document.querySelectorAll(".js_banner_wrap")[0].innerHTML = template(contentTree);
}


function showErrorMessage(err) {
  console.log('Delivery API Request Failure', err);
  $(document.body).append('<div class="error">An error occurred retrieving your content.<br/><br/>Please ensure that it is published.<br/><br/>Details of the error have been saved to the browser console.</div>');
}


// Carousel Functions

dfs.carouselText = function(target, text){
  var el = $('.' + target);
  el.html(text);
  if(el.length){
    return '.' + target + ' updated to ' + text;
  } else {
    return 'Error Updating Carousel, Element Not Found! :(';
  }
}

  // Countdowns

    if(!dfs){
      var dfs = {};
    }
    dfs.carCountdown = {
        init: function(){
          console.log('Countdown Init!');
          if($('.bannerTextContainer.carCountdown').length>0) {
            this.addCountDown();
          }
      },
        addCountDown: function(){
          $('.bannerTextContainer.carCountdown').each(function() {
            var _this = this,
            data = $(_this).data(),
            deadline = data.countdown,
            testDate = data.testdate,
            daysStart = data.startdays,
            messageC = data.messagec,
            messageD = data.messaged,
            textVariance1 = data.tv1,
            textVariance2 = data.tv2,
            textVariance3 = data.tv3,
            textVariance4 = data.tv4,
            messageID = data.messageid.replace('slide_','');
            // console.log(deadline + ' , ' + daysStart + ' , ' + messageID) ;
            // console.log(textVariance1,textVariance2,textVariance3,textVariance4);
            var countDownOBj = dfs.getTimeRemaining(deadline, testDate);

            if(dfs.HPSlider.isROI) {
              messageC = messageC.replace('£', '&euro;');
              messageD = messageD.replace('£', '&euro;');
            }

            // Check if this Slide needs a text Update

            dfs.checkTextData(textVariance1, messageID, testDate);
            dfs.checkTextData(textVariance2, messageID, testDate);
            dfs.checkTextData(textVariance3, messageID, testDate);
            dfs.checkTextData(textVariance4, messageID, testDate);

            // Check If this Slide Countdown is to begin.
            if( countDownOBj.total > 0 && countDownOBj.days < daysStart) {
              console.log('Show Countdown on Slide: ' + messageID );

              $('h2.message'+ messageID + 'b, h2.message'+ messageID + 'a').addClass('cdText');

              dayOrDays = countDownOBj.days > 1 ? "DAYS" : "DAY";
              var updateCountdown = setInterval(function(){
                    var countDownOBj = dfs.getTimeRemaining(deadline, testDate);

                    if(countDownOBj.hours < 10 ){
                      countDownOBj.hours = '0' + countDownOBj.hours;
                    }
                    if(countDownOBj.mins < 10 ){
                      countDownOBj.mins = '0' + countDownOBj.mins;
                    }
                    if(countDownOBj.seconds < 10 ){
                      countDownOBj.seconds = '0' + countDownOBj.seconds;
                    }
                    if(countDownOBj.days > 0) {
                      var line1 = "FINAL " + countDownOBj.days + " " + dayOrDays;
                      var ampersand = true;
                    } else {
                      var line1 = "ENDS TODAY";
                      var ampersand = false;
                    }

                    if(ampersand) {
                      var line2 = "& ";
                    } else {
                      var line2 = "";
                    }

                    line2 += countDownOBj.hours + "<span>hrs </span>" + countDownOBj.minutes + "<span>mins </span>" + countDownOBj.seconds + "<span>secs </span>",
                    line3 = countDownOBj.days === 0 ? messageC : "";
                    line4 = countDownOBj.days === 0 ? messageD : messageD;

                    dfs.carouselText('message' + messageID + "a", line1);
                    dfs.carouselText('message' + messageID + "b", line2);
                    dfs.carouselText('message' + messageID + "c", line3);
                    dfs.carouselText('message' + messageID + "d", line4);


              }, 1000);
            } else {
              console.log('show Static text for slide ' + messageID);
            }
        });
      }
    }

  dfs.checkTextData = function(variance, mID, td){
    var v1 = variance.replace(/,\s+/g, ',').split(',');
      if(v1.length !== 6) {
        console.log('slide: ' + mID + ' Invalid Csv Data length, Skipping This Event! ('+ variance+ ')');
        return false;
      }
      // Disable TestDate
      // if(td){
      //   var moment = new Date(td);
      // } else {
      //   var moment = new Date(); // Added Below as default
      // }

      var moment = new Date();


      var startDate = v1[0].split('/'), endDate = v1[1].split('/');
      var this_startDate = new Date(startDate[1]+'/' + startDate[0] +'/' + startDate[2] + ' 23:59:59');
      var this_endDate = new Date(endDate[1]+'/' + endDate[0] +'/' + endDate[2] + ' 23:59:59');
      // console.log('Now:' + moment)
      // console.info('S:', this_startDate);
      // console.info('E:', this_endDate);

      if(this_startDate <= moment && this_endDate >= moment){
        dfs.carouselText('message' + mID + "a", v1[2]);
        dfs.carouselText('message' + mID + "b", v1[3]);
        dfs.carouselText('message' + mID + "c", v1[4]);
        dfs.carouselText('message' + mID + "d", v1[5]);
      }
    }

  dfs.getTimeRemaining = function(endtime, testDate){
    // Disable TestDate
    // if(testDate){
    //   var current_time = new Date(),
    //     hrs = current_time.getHours(),
    //     mins = current_time.getMinutes(),
    //     secs = current_time.getSeconds();
    //     testDate += ' ' + hrs + ':' + mins + ':' + secs;
    //
    //   var t = Date.parse(endtime) - Date.parse(new Date(testDate));
    // } else {
    //   var t = Date.parse(endtime) - Date.parse(new Date()); // Added Below as default
    // }

    var t = Date.parse(endtime) - Date.parse(new Date());

  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

dfs.updateElement = function(){
  var test4Element = $('#myCarousel');
    if(test4Element.length) {
          $('#myCarousel').carousel({ interval: 6000});
          $('#myCarousel').carousel('pause');
        clearInterval(PollElement);
        console.log('Carousel Ready and Initiated : ' + PollElement);
        dfs.carCountdown.init();

    }
}

// start carousel if loaded..
var PollElement = setInterval(dfs.updateElement, 500);
