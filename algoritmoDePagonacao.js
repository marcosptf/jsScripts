
		/****************************************************************************************
		ROTINA PARA RESGATAR LINHAS DE RESPOSTA e calculeira para paginacao
		*****************************************************************************************/
                $htmlPaginacao  = "<table border='0' cellspacing='0'  cellpadding='0'><tr><td>&nbsp;</td><td>&nbsp;</td>";
                $itensPorPagina = 5;
                $inicioOffset   = 0;
                $pagOffset      = 0;
                $numeroPaginas  = 5;
		$contItem       = 0;
		$arrayOrdenacao = array();
                $pPagAtual      = (((empty($_GET['pagAtual'])) || (!is_numeric($_GET['pagAtual']))) ? (1) : ($_GET['pagAtual']));
                $pLimit         = $itensPorPagina;
                $pOffset        = (($pPagAtual==1) ? ($inicioOffset) : ($pPagAtual));
                $paginaAtual1   = "";
                $paginaAtual2   = "";
                
		$getPropostaItens = $new_Acoes_proposta_get->get_dados_proposta_itens($proposta_id,$revisao,$pOffset,$pLimit);

                if($getPropostaItens[0]['counter']>$itensPorPagina){
                    
                    print $ultimaPagina=ceil($getPropostaItens[0]['counter'] / $itensPorPagina);
                    $htmlPaginacao.="<td><a href='?link=cotf_a&c={$proposta_id}&pagAtual=1'>|&lt;</a></td>";
                    $htmlPaginacao.="<td>&nbsp;</td>";
                    $htmlPaginacao.="<td>&nbsp;</td>";
                    for($pagVisualizada=(($pPagAtual>1) ? ($pPagAtual-1) : ($pPagAtual)),$qtdePagSerVisualizada=1;$qtdePagSerVisualizada<=$ultimaPagina;$pagVisualizada++,$qtdePagSerVisualizada++){
                        
                        $pagOffset = ($pOffset * $itensPorPagina);
                        
                        if($pagVisualizada==$pPagAtual){
                            $paginaAtual1 = "&nbsp;&nbsp;<b>{";
                            $paginaAtual2 = "}</b>&nbsp;&nbsp;";
                            
                        }else{
                            $paginaAtual1 = "&nbsp;&nbsp;";
                            $paginaAtual2 = "&nbsp;&nbsp;";
                            
                        }
                        
                        if($qtdePagSerVisualizada==1){
                            $pagAnterior = ((($pPagAtual==1) || ($pPagAtual==2)) ? (1) : ($pPagAtual-2));
                            $htmlPaginacao.="<td><a href='?link=cotf_a&c={$proposta_id}&pagAtual={$pagAnterior}'>&lt;</a></td>";
                        }    
                        
                        if($qtdePagSerVisualizada <= $numeroPaginas){
                            $htmlPaginacao.="<td><a href='?link=cotf_a&c={$proposta_id}&pagAtual={$pagVisualizada}'>{$paginaAtual1}{$pagVisualizada}{$paginaAtual2}</a></td>";
                        }
                        
                        if($qtdePagSerVisualizada==($numeroPaginas+1)){
                            $htmlPaginacao.="<td><a href='?link=cotf_a&c={$proposta_id}&pagAtual={$pagVisualizada}'>&gt;</a></td>";
                        }
                        
                        if($qtdePagSerVisualizada==$ultimaPagina){
                            $htmlPaginacao.="<td>&nbsp;</td>";
                            $htmlPaginacao.="<td>&nbsp;</td>";
                            $htmlPaginacao.="<td><a href='?link=cotf_a&c={$proposta_id}&pagAtual={$ultimaPagina}'>&gt;|</a></td>";
                            break;    
                        }
                        
                        if($qtdePagSerVisualizada>$numeroPaginas){
                            continue;
                        }
                        
                    }
                    $htmlPaginacao.="<td>&nbsp;</td><td>&nbsp;</td></tr></table>";
                    
                }else{
                    $htmlPaginacao.="<td><a href='javascript:;'>&nbsp;&nbsp;<b>{1}</b>&nbsp;&nbsp;</a></td>";
                    $htmlPaginacao.="<td>&nbsp;</td><td>&nbsp;</td></tr></table>";
                    
                }






