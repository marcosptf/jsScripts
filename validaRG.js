
function validaRg(rg)
{
    if (rg.length < 8) {
        return false
    } else if (rg == 0) {
        return false;
    }

    return true;
}

