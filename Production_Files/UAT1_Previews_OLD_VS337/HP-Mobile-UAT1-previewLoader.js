// UAT1 Mobile Visual Loader
if(!dfs) {
var dfs = {};
}

dfs.HPSlider = {
    maxSlides: $('.js_banner_wrap').data('maxslides') || 4,
    slotID: $('.js_banner_wrap').data('slotid'),
    template: $('.js_banner_wrap').data('template')
}

function ampGetQueryValue(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
          // no api string provided in url so lets make a default
          if(variable !== 'roi'){
            return 'w59a4sqnbu301ot4nys8p4qo9-gvzrfgnzc-'+ new Date().getTime() +'.staging.bigcontent.io';
          }
    }

    Handlebars.partials = AmpCa.templates;

    AmpCa.utils = new AmpCa.Utils();
    var cacheBuster = Math.random().toString(36).substr(2, 12);

    AmpCa.utils.getCaData({
      url: "//" + ampGetQueryValue('api')
                                  + "/cms/content/query?fullBodyObject=true&query="
                                  + encodeURIComponent(JSON.stringify({"sys.iri":"http://content.cms.amplience.com/" + dfs.HPSlider.slotID}))
                                  + "&scope=tree&store=dfs&cacheBuster=" + cacheBuster,

        callback: function (data) {
            // data[0].renderTypes = renderTypes;
            // get preview date
            data[0].previewDate = ampGetQueryValue('api').match(/\d{13,}/);
            if(data[0].previewDate) {
              var this_timeStamp = data[0].previewDate[0];
              var dateString = new Date(Number(this_timeStamp));
              data[0].testDate = dateString.getDate() + '/' + (dateString.getMonth() + 1) + '/' +
              dateString.getFullYear() + ' ' + dateString.getHours() + ':' + dateString.getMinutes() + ':'
              +dateString.getSeconds();
            } else {
              data[0].testDate = "";
            }

            data[0].spec = {"testDate" : data[0].testDate};
            data[0].carouselslot.spec = {};
            var isROIparam = window.ampGetQueryValue('roi');

            if(isROIparam){
            data[0].carouselslot.spec.roi = true;

            } else {
            data[0].carouselslot.spec.roi = $('.js_banner_wrap').data('roi');
            }

             if(data[0].carouselslot.slides.length > dfs.HPSlider.maxSlides) {
             data[0].carouselslot.slides.length = dfs.HPSlider.maxSlides;
             }

            // setup  pricing labels for each slide
            for(s=0; s < data[0].carouselslot.slides.length; s++){
                 
                 // pricing Label
                 // locale changes

                 // Price
                 if(data[0].carouselslot.slides[s].priceLabel){
                 var p = data[0].carouselslot.slides[s].priceLabel[1].split(';');

                 if(p.length > 1) {
                 data[0].carouselslot.slides[s].priceLabel[1] = data[0].carouselslot.spec.roi ? p[1] : p[0];
                 }

                 // after event text / save

                 for (x=2; x < 5; x++) { var a=data[0].carouselslot.slides[s].priceLabel[x].split(';'); if(a.length> 1) {
                     data[0].carouselslot.slides[s].priceLabel[x] = data[0].carouselslot.spec.roi ? (a[0].split('£')[0] + a[1]) : a[0];
                     }

                     }

                     // create finance price

                     var pp = Number(data[0].carouselslot.slides[s].priceLabel[1].replace(/[^\d.-]/g, ''));

                     if(data[0].carouselslot.spec.roi) {
                     data[0].carouselslot.slides[s].priceLabel[7] = '€' + (pp / 36).toFixed(3).toString().slice(0, -1) + ' a month for 3 years';
                     } else {
                     data[0].carouselslot.slides[s].priceLabel[7] = '£' + (pp / 48).toFixed(3).toString().slice(0, -1) + ' a month for 4 years';
                     }

                     // build desktop finance details

                     if(data[0].carouselslot.slides[s].priceLabel && data[0].carouselslot.slides[s].priceLabel[7]) {
                     data[0].carouselslot.slides[s].financeArray = data[0].carouselslot.slides[s].priceLabel[7].split(' a month ');
                     data[0].carouselslot.slides[s].financeArray.push('a month');
                     } 

                     if(data[0].carouselslot.slides[s].priceLabel && data[0].carouselslot.slides[s].priceLabel[6]) {
                     data[0].carouselslot.slides[s].priceLabelTop = data[0].carouselslot.slides[s].priceLabel[6].split(';');
                     } else {
                     data[0].carouselslot.slides[s].priceLabelTop = ['0','0','0'];
                     }

                     }
            }

            console.log('dataSaved: to SLData');
            SLData = data[0];
            var template = Handlebars.template(AmpCa.templates[dfs.HPSlider.template]);
            document.querySelectorAll(".js_banner_wrap")[0].innerHTML = template(data[0]);

            // loryHelpers.initSliders(document.querySelectorAll(".js_slider"));
            AmpCa.utils.postProcessing.exec('slider', {});

        },
        formatData: function (data) {
            return amp.inlineContent(JSON.parse(data));
        }
    });

    // Carousel
/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+ function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return {
          end: transEndEventNames[name]
        }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () {
      called = true
    })
    var callback = function () {
      if (!called) $($el).trigger($.support.transition.end)
    }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+
function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options = options
    this.paused = null
    this.sliding = null
    this.interval = null
    this.$active = null
    this.$items = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37:
        this.prev();
        break
      case 39:
        this.next();
        break
      default:
        return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval &&
      !this.paused &&
      (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0) ||
      (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
      that.to(pos)
    }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find('.item.active')
    var $next = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

// ===========================================
//  Carousel Builder v2.1 PB OCT 23 2019
// ===========================================


// Carousel Functions
if (!dfs) {
  var dfs = {};
}
dfs.countdownv2 = {
  timerID: [],
  isMobile: function () {
    if (window.location.origin.indexOf('https://m.') > -1) {
      return true;
    }
    return false;
  },
  init: function () {
    if (document.getElementsByClassName('countdown_v2').length) {
      this.addCountdown();

    }
  },
  convertDate: function (xdate) {
    var dateArray = xdate.split(' ');
    var dx = dateArray[0].split('/');
    var formattedDate = dx[1] + '/' + dx[0] + '/' + dx[2];
    if (dateArray[1] != undefined) {
      formattedDate += ' ' + dateArray[1];
    }
    return new Date(formattedDate);
  },
  updateTestDate: function (testDate) {
    var time = new Date();
    testDate.setHours(time.getHours());
    testDate.setMinutes(time.getMinutes());
    testDate.setSeconds(time.getSeconds());
    return testDate;
  },
  timeRemaining: function (deadline, testDate) {
    if (testDate instanceof Date) {
      testDate = dfs.countdownv2.updateTestDate(testDate);
      var dateTime = new Date(testDate);
    } else {
      var dateTime = new Date();
    }
    var t = Date.parse(deadline) - dateTime,
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  },
  checkDateRange: function (startDate, endDate, testDate) {
    var stDate = Date.parse(startDate),
      enDate = Date.parse(endDate);
    if (testDate instanceof Date) {
      testDate = dfs.countdownv2.updateTestDate(testDate);
      var now = Date.parse(new Date(testDate));
    } else {
      var now = Date.parse(new Date());
    }

    return (now > stDate && now < enDate);
  },
  addCountdown: function () {
    $('div.countdown_v2').each(function (index, value) {
      var _this = this,
        deadline = [],
        startDays = [],
        hideFinalMessage = [],
        data = $(_this).data();
      hideFinalMessage[index] = data.hidefinalmessage;
      deadline[index] = data.deadline;
      startDays[index] = data.startdays;

      if (data.testdate) {
        var testDate = dfs.countdownv2.convertDate(data.testdate);
      } else {
        var testDate = "";
      }
      dfs.countdownv2.timerID[index] = setInterval(function () {

        //process Dynamic header/footer

        for (var i in data) {
          // check date ranges

          if (i.indexOf('daterange') > -1 && data[i] !== "") {
            //process daterange
            var thisDateRange = data[i].split(',');
            // 0 = startDate / 1 = endDate / 2 = headerText / 3 = footerText
            var startDate = dfs.countdownv2.convertDate(thisDateRange[0].trim()),
              endDate = dfs.countdownv2.convertDate(thisDateRange[1].trim());
            endDate.setHours(23, 59, 59);
            var headText = thisDateRange[2].trim(),
              footText = thisDateRange[3].trim();

            if (dfs.countdownv2.checkDateRange(startDate, endDate, testDate)) {
              $(_this).children('h6.cdHeader').html(headText);
              $(_this).children('h6.cdFooter').html(footText);
            }

          }

        }


        // process countdown
        var jdate = dfs.countdownv2.convertDate(deadline[index]);
        var timer = dfs.countdownv2.timeRemaining(jdate, testDate);
        if (startDays[index] >= timer.days) {
          var timerHtml = "<p><span class=\"cdDays\">" + timer.days + "</span> Days</p><p><span class=\"cdHours\">" + timer.hours + "</span> Hours</p><p><span class=\"cdMinutes\">" + timer.minutes + "</span> Minutes</p><p><span class=\"seconds\">" + timer.seconds + "</span> Seconds</p><div class=\"clearfix\"></div>";
          if (timer.days < 0) {
            dfs.countdownv2.stopTimer(index);
            $(_this).css('display', 'none');
          }
          $(_this).children('section').html(timerHtml);
          if (timer.days == 0 && !dfs.countdownv2.isMobile() && !hideFinalMessage[index]) {
            //show ending footer if last day and desktop
            $(_this).next('div').css('display', 'block');
          }
        } else {
          // // no countdown text
          $(_this).children('section').html('');
        }
      }, 1000);
    });
  },
  stopTimer: function (id) {
    // id is the timerID array key ie. 0 for the first countdown etc..
    clearInterval(this.timerID[id]);
  },
  previewDate: function (newDate) {
    $('.countdown_v2').each(function (index) {
      $(this).data().testdate = newDate;
      console.log('TimerID:' + index, 'Showing new date: ' + newDate);
      // clear existing countdowns
      clearInterval(dfs.countdownv2.timerID[index]);

    });

    this.init();
  }

};

dfs.updateElement = function () {
  var test4Element = $('#hpCarousel');
  if (test4Element.length) {
    $('#hpCarousel').carousel({
      interval: 6000
    });
    $('#hpCarousel').carousel('pause');
    clearInterval(PollElement);
    console.log('Carousel Ready and Initiated : ' + PollElement);
    // start Countdowns
    dfs.countdownv2.init();

    // Carousel Swipe
    (function ($) {

      var touchStartX = null;

      $('.carousel').each(function () {
        var $carousel = $(this);
        $(this).on('touchstart', function (event) {
          var e = event.originalEvent;
          if (e.touches.length == 1) {
            var touch = e.touches[0];
            touchStartX = touch.pageX;
          }
        }).on('touchmove', function (event) {
          var e = event.originalEvent;
          if (touchStartX != null) {
            var touchCurrentX = e.changedTouches[0].pageX;
            if ((touchCurrentX - touchStartX) > 60) {
              touchStartX = null;
              $carousel.carousel('prev');
            } else if ((touchStartX - touchCurrentX) > 60) {
              touchStartX = null;
              $carousel.carousel('next');
            }
          }
        }).on('touchend', function () {
          touchStartX = null;
        });
      });

    })(jQuery);


  }
}

// start carousel if loaded..
var PollElement = setInterval(dfs.updateElement, 500);

// Additional Handlbars Helpers

Handlebars.registerHelper("math", function (lvalue, operator, rvalue, options) {
  lvalue = parseFloat(lvalue);
  rvalue = parseFloat(rvalue);

  return {
    "+": lvalue + rvalue,
    "-": lvalue - rvalue,
    "*": lvalue * rvalue,
    "/": lvalue / rvalue,
    "%": lvalue % rvalue
  } [operator];
});

Handlebars.registerHelper("finance", function (price, local) {
  var this_price = price.match(/([1-9])+/g);
  if (local === 'UK') {
    return '&pound;' + Math.floor(parseFloat((this_price[0]) / 48) * 100) / 100 + ' a month for 4 years';
  } else {
    return '&euro;' + Math.floor(parseFloat((this_price[0]) / 36) * 100) / 100 + ' a month for 3 years';
  }

});

Handlebars.registerHelper("csv", function (str, device) {
  var colors = str.split(',');
  if (device === 'M') {
    if (colors[1] !== undefined && colors[1] != false) {
      return colors[1];
    } else {
      if (colors[0] !== undefined && colors[0] != false) {
        return colors[0];
      } else {
        return '000000';
      }

    }
  }

  if (device === 'D') {
    if (colors[0] !== undefined && colors[0] != false) {
      return colors[0];
    } else {
      return '000000';
    }
  }
  // No Matches Return Default Black
  return '000000';
});