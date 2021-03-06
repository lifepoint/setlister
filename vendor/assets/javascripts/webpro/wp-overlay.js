/**
* wp-overlay.js - version 0.1 - WebPro Release 0.1
*
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*       * Redistributions of source code must retain the above copyright notice,
*             this list of conditions and the following disclaimer.
*       * Redistributions in binary form must reproduce the above copyright notice,
*             this list of conditions and the following disclaimer in the documentation
*             and/or other materials provided with the distribution.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function( $, WebPro, window, document, undefined ){

WebPro.widget( "Widget.Overlay", WebPro.Widget, {
    _widgetName: "overlay",

    _attachBehavior: function() {
        var widget = this;

        widget.$element.on( 'vclick', '.close', function( evt ) {
          evt.preventDefault();

          widget.trigger( 'wp-overlay-hide' );

          widget.hide();
        });

        $( window ).on( 'resize scroll', function() {
            widget._resize();
        });
        widget._resize();
    },

    _resize: function() {
        var $win = $( window ),
            winWidth = $win.width(),
            winHeight = $win.height();

        this.$element.width( winWidth ).height( winHeight ).css( 'top', $win.scrollTop() + 'px' );
    },

    hide: function() {
      this.$element.css( 'left', '-9999px' );
    },

    show: function() {
      this.$element.css( 'left', '0px' );
    }
});

$.fn.wpOverlay = function() {
  var overlay = new WebPro.Widget.Overlay( this );
  this.data( 'wp-overlay', overlay );
};

})( jQuery, WebPro, window, document );
