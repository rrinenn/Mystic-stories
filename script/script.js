// LOADER
$(window).on("load", function() {
  $('.loader').addClass("preloader-remove");
});
// BURGER MENU
$(document).ready(function() {
  const $burgerMenu = $('.burger-menu');
  const $sidebar = $('.sidebar');
  const $overlay = $('.overlay');
  const $burger = $('.burger');
  const toggleMenu = () => {
    if ($sidebar.css('left') === '0px') {
      $sidebar.css('left', '-400px');
      $overlay.css('display', 'none');
      $('body').removeClass('body--locked');
      $burger.removeClass('active');
    } else {
      $sidebar.css('left', '0px');
      $overlay.css('display', 'block');
      $('body').addClass('body--locked');
      $burger.addClass('active');
    }
  };
  $burgerMenu.on('click', toggleMenu);
});
$(document).ready(function() {
  $(document).on('click', function(event) {
    const $target = $(event.target);
    const $sidebar = $('.sidebar');
    const $overlay = $('.overlay');
    const $burger = $('.burger');
    const isMenuClicked = $target.hasClass('burger-menu') || $target.closest('.burger-menu').length > 0;
    const isSidebarClicked = $target.hasClass('sidebar') || $target.closest('.sidebar').length > 0;
    if (!isMenuClicked && !isSidebarClicked) {
      $sidebar.css('left', '-400px');
      $overlay.css('display', 'none');
      $('body').removeClass('body--locked');
      $burger.removeClass('active');
    }
  });
  
});
// INPUT SEARCH STYLE
$(document).ready(function(){
  $("#search").focus(function() {
    $(".hero__wrap-search").addClass("border-searching");
    $(".search-icon").addClass("si-rotate");
  });
  $("#search").blur(function() {
    $(".hero__wrap-search").removeClass("border-searching");
    $(".search-icon").removeClass("si-rotate");
  });
  $("#search").keyup(function() {
      if($(this).val().length > 0) {
        $(".go-icon").addClass("go-in");
      }
      else {
        $(".go-icon").removeClass("go-in");
      }
  });
  $(".go-icon").click(function(){
    $(".search-form").submit();
  });
});
// LIGHT/DARK
$(document).ready(function() { 
  $(".toggle-switch").on("click", function(event){ 
    $("body").toggleClass("white-theme active"); 
    $(".history, .footer, .faq__accordion-header, .faq__accordion-content").toggleClass("active-background"); 
    $(".history-title, .footer__wrap-logo, .rights, .footer__nav-link, .about__wrap-title, .about__wrap-text, .about__wrap-subtitle, .about__description-text, .stories-title, .card-content__description-text, .slider-text").toggleClass("active-title"); 
    $(".faq__accordion-header, .slider-title").toggleClass("active-bold"); 
    $(".faq__accordion-text").toggleClass("active-bold"); 
  }); 
});

// ACCORDION
document.addEventListener("DOMContentLoaded", function() {
  const accordionHeaders = document.querySelectorAll(".faq__accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
      const accordionItem = this.parentElement;
      const accordionContent = accordionItem.querySelector(".faq__accordion-content");
      const icon = this.querySelector("i");

      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });
});

// Search in table
$(document).ready(function() {
  $('#search').on('input', function() {
    var searchTerm = $(this).val().trim();
    var $main = $('main');
    
    function highlightText(node, searchWords) {
      if (node.nodeType === 3) { 
        var nodeText = node.nodeValue;
        var matchedWords = searchWords.filter(word => nodeText.toLowerCase().includes(word.toLowerCase()));
        if (matchedWords.length > 0) {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = nodeText.replace(new RegExp('(' + matchedWords.join('|') + ')', 'gi'), '<span class="highlight">$1</span>');
          while (tempDiv.firstChild) {
            node.parentNode.insertBefore(tempDiv.firstChild, node);
          }
          node.parentNode.removeChild(node);
        }
      } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
        for (var i = 0; i < node.childNodes.length; i++) {
          highlightText(node.childNodes[i], searchWords);
        }
      }
    }

    $main.html($main.data('original-content'));

    if (!searchTerm) {
      return;
    }

    var searchWords = searchTerm.split(/\s+/);

    var regex = new RegExp('(' + searchWords.join('|') + ')', 'gi');

    $main.contents().each(function() {
      highlightText(this, searchWords);
    });
  });

  var $main = $('main');
  $main.data('original-content', $main.html());
});
// Search in mobile
$(document).ready(function() {
  $('#burger-search').on('input', function() {
    var searchTerm = $(this).val().trim();
    var $main = $('main');
    
    function highlightText(node, searchWords) {
      if (node.nodeType === 3) {
        var nodeText = node.nodeValue;
        var matchedWords = searchWords.filter(word => nodeText.toLowerCase().includes(word.toLowerCase()));
        if (matchedWords.length > 0) {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = nodeText.replace(new RegExp('(' + matchedWords.join('|') + ')', 'gi'), '<span class="highlight">$1</span>');
          while (tempDiv.firstChild) {
            node.parentNode.insertBefore(tempDiv.firstChild, node);
          }
          node.parentNode.removeChild(node);
        }
      } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
        for (var i = 0; i < node.childNodes.length; i++) {
          highlightText(node.childNodes[i], searchWords);
        }
      }
    }

    $main.html($main.data('original-content'));

    if (!searchTerm) {
      return;
    }

    var searchWords = searchTerm.split(/\s+/);

    var regex = new RegExp('(' + searchWords.join('|') + ')', 'gi');

    $main.contents().each(function() {
      highlightText(this, searchWords);
    });
  });

  var $main = $('main');
  $main.data('original-content', $main.html());
});