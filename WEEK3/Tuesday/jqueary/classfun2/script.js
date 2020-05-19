(function($) {
    $(function() {
      var isMouseDown = false,
        $bottomImg = $("#bottom-img"),
        $topImg = $("#top-img"),
        $container = $("#container"),

        getParentWidth = function(){
        return $container.width();
        },

      mouseMoveHandler = function(e) {
        if (!isMouseDown) return;

        var width = (e.clientX / getParentWidth()) * 100;

        width = width < 0 ? 0 : width;

        $bottomImg.css({ width: width + "%" });

        $topImg.css({ width: 100 - width + "%" });
         };

      $("#slider").on("mousedown", function() {
        !isMouseDown && $container.on("mousemove", mouseMoveHandler);
        isMouseDown = true;
      });

      $(window).on("mouseup", function() {
        isMouseDown = false;
        // detach then mouseMove handler
        $container.off("mousemove");
      });

    });
})();