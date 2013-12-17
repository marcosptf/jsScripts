
/**
 * Removes duplicates in the array 'a'
 * @author Johan Känngård, http://johankanngard.net/
 */
function unique(a) {
	tmp = new Array(0);
	for(i=0;i<a.length;i++){
		if(!contains(tmp, a[i])){
			tmp.length+=1;
			tmp[tmp.length-1]=a[i];
		}
	}
	return tmp;
}
function contains(a, e) {
	for(j=0;j<a.length;j++)if(a[j]==e)return true;
	return false;
}

function removeItems(array, item) {
	var i = 0;
	while (i < array.length) {
		if (array[i] == item) {
			array.splice(i, 1);
		} else {
			i++;
		}
	}
	return array;
}

$(document).ready(function () {
	var stringOfClassNames = '';
	$('.filterThis > div').each( function (i){
		var thisClassString = $(this).attr('class');
		stringOfClassNames = stringOfClassNames +' '+ thisClassString
	});
	stringOfClassNames = jQuery.trim(stringOfClassNames);
	var arrayClasses = stringOfClassNames.split(' ');
	var arrayClasses = arrayClasses.sort();
	totalNumberOfItemsToFilter = $('.filterThis > div').length;
	var result = new Object();
	for (var filterClass in arrayClasses) {
		if (result[arrayClasses[filterClass]] === undefined) {
			result[arrayClasses[filterClass]] = 1;
		} else {
			result[arrayClasses[filterClass]]++;
		}
	}
	var resultsToRemoveFromFilters = new Array();
	for (var item in result) {
		if (result[item] == totalNumberOfItemsToFilter) {
			resultsToRemoveFromFilters.push(item);
		}
	}
	arrayUniqueClasses = (unique(arrayClasses));
	for (x in resultsToRemoveFromFilters) {
		arrayUniqueClasses = removeItems(arrayUniqueClasses,resultsToRemoveFromFilters[x]);
	}
//	$('.filterThis').before('<p><strong>Classes excluded from filters because they are common to all elements:<\/strong> '+resultsToRemoveFromFilters+'<\/p>');
	if (arrayUniqueClasses.length > 1) {
//		$('<ul class="filters"><\/ul>').insertBefore('.filterThis');
		$.each(arrayUniqueClasses, function() {
                        var a,b,c,d,f;
                        a=this;c="";b=a.split("-");f="";
                        for(d=0;d<b.length;d++){c+=b[d]+" ";}
                        if(this=="de-3-a-5-anos"){
                            f="<li><h3>Idade</h3></li>";
                        }else if(this=="Dentro-de-casa"){
                            f="<li><h3>Local</h3></li>";
                        }else if(this=="jogadores-2"){
                            f="<li><h3>Número de jogadores</h3></li>";
                        }

                        if((this!="gameSearch") && ((this!="game"))){
                            $(f+'<li><input class="dynamicFilterInput" type="checkbox" value="'+this+'" id="filterID'+this+'" /><label for="filterID'+this+'">'+c+'<\/label><\/li>').appendTo('ul.filters');
                        }
			
		});
		$('<li><input type="checkbox" value="filterAll" id="filterIDall" /><label for="filterIDall">Exibir Todos<\/label><\/li>').appendTo('ul.filters');
		$('.filters input').click( function() {
			var value= $(this).val();
			if ((value == 'filterAll') && ($(this).is(':checked'))) {
				$('.filters input').attr('checked','checked');
				$('.filterThis div').slideDown();
                                $('#exibeBrincadeiras').css('display','block');
                                $('#exibeCrianca').css('display','block');
                                $('#exibeFora').css('display','block');
                                $('#exibeJogador2').css('display','block');
                                $('#exibeJogador3').css('display','block');
                                $('#exibeJogador4').css('display','block');
			} else {

                                if((value=="de-3-a-5-anos") || (value=="de-6-a-8-anos")){
                                    $('#exibeBrincadeiras').css('display','block');
                                    $('#exibeCrianca').css('display','block');
                                }else if((value=="Dentro-de-casa") || (value=="Fora-de-casa")){
                                    $('#exibeBrincadeiras').css('display','block');
                                    $('#exibeFora').css('display','block');
                                }else if(value=="jogadores-2"){
                                    $('#exibeBrincadeiras').css('display','block');
                                    $('#exibeJogador2').css('display','block');
                                }else if(value=="jogadores-3"){
                                    $('#exibeBrincadeiras').css('display','block');
                                    $('#exibeJogador3').css('display','block');
                                }else if(value=="jogadores-4"){
                                    $('#exibeBrincadeiras').css('display','block');
                                    $('#exibeJogador4').css('display','block');
                                }

				stringValue = '.filterThis > div.'+value;
				stringValueOpposite = '.filterThis > div:not(.'+value+')';
				if ($(this).is(':checked')) {
					classesOfItemToShow = '';
					$(stringValue).slideDown().each( function() {
						classesOfItemToShow = classesOfItemToShow + ' ' + $(this).attr('class');
					});
					classesOfItemToShow = jQuery.trim(classesOfItemToShow);
					classesOfItemToShow = classesOfItemToShow.split(' ');
					classesOfItemToShow = (unique(classesOfItemToShow));
					if (classesOfItemToShow.length > 1) {
						$.each(classesOfItemToShow, function() {
							$('.filters input[value='+this+']').attr('checked','true');
						});
					}
					if ($('.dynamicFilterInput').not(':checked').length == 0) {
						$('#filterIDall').attr('checked','true');
					}
				} else {
					OtherClassesAssociatedWithTheItemToBeRemoved = '';
					Oca = OtherClassesAssociatedWithTheItemToBeRemoved;
					$(stringValue).each(function(i) {
						Oca = Oca + ' ' + $(this).attr('class');
					});
					Oca = jQuery.trim(Oca);
					Oca = Oca.split(' ');
					Oca = (unique(Oca));
					if (Oca.length > 1) {
						$.each(Oca, function() {
							classToCompare = this;
							if (!($('.'+classToCompare).is(stringValueOpposite))) {
								// uncheck the checkbox that classToCompare represents
								$('.filters input[value='+classToCompare+']').removeAttr('checked');
							}
						});
					}
					$(stringValue).slideUp();
					$('.filters #filterIDall').removeAttr('checked');
				}
			}
		});
	}
});


