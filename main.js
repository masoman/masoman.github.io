$("a[href='#top']").click(function() {
  console.log('hi');
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(function {
  lightbox.option({
      'showImageNumberLabel': false
  })
});
