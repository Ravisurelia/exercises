(function () {
  var photoContainer, photoContainerWidth, offset;
  var slider = $("#slider");
  var container = $("#container");
  var topImage = $("#top-img");

  slider.on("mousedown", function (e) {
    photoContainer = container.offset().left;
    photoContainerWidth = container.outerWidth();
    var sliderX = slider.position().left;
    var pointer = e.clientX - photoContainer;
    offset = pointer - sliderX;
    container.on("mousemove", drag);
    e.preventDefault();
  });

  $(document).on("mouseup", function () {
    container.off("mousemove");
  });

  function drag(e) {
    if (e.clientX > photoContainer + photoContainerWidth) {
      return;
    }
    if (e.clientX < photoContainer) {
      return;
    }

    var pixels = e.clientX - photoContainer - offset + "px";
    slider.css({
      left: pixels,
    });
    topImage.css({
      width: pixels,
    });
  }
})();

///////code  below has some error

/*   $(function () {
    var isMouseDown = false,
      $bottomImg = $("#bottom-img"),
      $topImg = $("#top-img"),
      $container = $("#container"),
      getParentWidth = function () {
        return $container.width();
      },
      mouseMoveHandler = function (e) {
        if (!isMouseDown) return;

        var width = (e.clientX / getParentWidth()) * 100;

        width = width < 0 ? 0 : width;

        $bottomImg.css({ width: width + "%" });

        $topImg.css({ width: 100 - width + "%" });
      };

    $("#slider").on("mousedown", function () {
      !isMouseDown && $container.on("mousemove", mouseMoveHandler);
      isMouseDown = true;
    });

    $(window).on("mouseup", function () {
      isMouseDown = false;
      // detach then mouseMove handler
      $container.off("mousemove");
    });
  });
})(); */
