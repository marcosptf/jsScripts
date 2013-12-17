
function validaCep(value)
{
    if (value.length < 9) {
        return false;
    }

    if (value == "00000-000" || value == "11111-111" || value == "22222-222" ||
        value == "33333-333" || value == "44444-444" || value == "55555-555" ||
        value == "66666-666" || value == "77777-777" || value == "88888-888" ||
        value == "99999-999") {
        return false;
    }

    return true;
}

