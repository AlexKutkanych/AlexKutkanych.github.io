//main video playback

$(document).ready(function(){

  var mainVideo = $('video');
  var videoOriginalWidth = 854;
  var videoOriginalHeight = 480;

  // re-scale image when viewport resizes
	$(window).resize(function(){

		// get the parent element size
		var containerWidth = mainVideo.parent().width();
		var containerHeight = mainVideo.parent().height();

		// use largest scale factor of horizontal/vertical
		var scaleWidth = containerWidth / videoOriginalWidth;
		var scaleHeight = containerHeight / videoOriginalHeight;
		var scale = scaleWidth > scaleHeight ? scaleWidth : scaleHeight;

		// scale the video
		mainVideo.width(scale * videoOriginalWidth);
		mainVideo.height(scale * videoOriginalHeight);

	});

  // trigger re-scale on pageload
	$(window).trigger('resize');

});
