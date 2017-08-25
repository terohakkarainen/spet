$(document).ready(function() {

  $(".component").click(function(event) {
    $(this).toggleClass("selectedComponent");
    visualizeStoryPoints(countStoryPoints());
    event.preventDefault();
  });

  function countStoryPoints() {
    return $('.selectedComponent').length;
  }

  function visualizeStoryPoints(points) {
    $(".storyPoint").removeClass("topCandidate candidate");
    switch(points) {
      case 1:
        $("#points05").addClass("topCandidate");
        $("#points1").addClass("candidate");
        break;
      case 2:
        $("#points05").addClass("candidate");
        $("#points1").addClass("topCandidate");
        $("#points2").addClass("candidate");
        break;
      case 3:
        $("#points1").addClass("candidate");
        $("#points2").addClass("topCandidate");
        $("#points3").addClass("candidate");
        break;
      case 4:
        $("#points1").addClass("candidate");
        $("#points2").addClass("topCandidate");
        $("#points3").addClass("candidate");
        break;
      case 5:
        $("#points2").addClass("candidate");
        $("#points3").addClass("topCandidate");
        $("#points4").addClass("candidate");
        break;
      case 6:
        $("#points3").addClass("candidate");
        $("#points4").addClass("topCandidate");
        $("#points5").addClass("candidate");
        break;
      case 7:
        $("#points3").addClass("candidate");
        $("#points4").addClass("topCandidate");
        $("#points5").addClass("candidate");
        break;
      case 8:
        $("#points4").addClass("candidate");
        $("#points5").addClass("topCandidate");
        break;
      case 9:
        $("#points4").addClass("candidate");
        $("#points5").addClass("topCandidate");
        break;
      default:
        break;
    }
  }

});
