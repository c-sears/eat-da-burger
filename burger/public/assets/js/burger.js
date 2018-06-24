$(()=>{
    $('#eat_burger').click(function(event){
        const updated_burger = {
            devoured: 1,
            id: $(this).data('id')
        }
        $.ajax({
            method: 'PUT',
            url: '/burger/update',
            data: updated_burger
        }).then(()=>{
            location.reload()
        })
    })

    $('#add_burger').click(function(event){
        const burger = {
            burger_name: $('#new_burger').val().trim(),
            devoured: false
        }
        $.ajax({
            method: 'POST',
            url: '/burger/add',
            data: burger
        }).then(()=>{
            location.reload()
        })
    })
})