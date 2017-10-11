$(document).ready(function() {
 
  const MAX_POINTS = $(".storyPoint").length;

  $(".component").click(function(event) {
    $(this).toggleClass("selectedComponent");
    visualizeStoryPoints(countStoryPoints());
    event.preventDefault();
  });

  $("#resetLink").click(function(event) {
    $(".component").removeClass("selectedComponent");
    visualizeStoryPoints(0);
    event.preventDefault();
  });

  function countStoryPoints() {
    return $('.selectedComponent').length;
  }
  
  function visualizeStoryPoints(points) {
    points = clamp(points);
    $(".storyPoint").removeClass("topCandidate candidate");
    if(points > 0){
      const index = points - 1;
      selectPointComponent(index).addClass('topCandidate');
      if(points > 1){
        selectPointComponent(index - 1).addClass('candidate');
      }
      if(points < MAX_POINTS){
        selectPointComponent(index + 1).addClass('candidate');
      }
    }
  }
  
  function clamp(points){
    return Math.min(Math.max(points, 0), MAX_POINTS);
  }
  
  function selectPointComponent(i){
    return $($(".storyPoint").get(i));
  }
  
});
