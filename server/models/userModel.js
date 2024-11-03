const { error } = require('console');
const {db} = require('../config/db.js')

//search attendee by name and get selected fields for attendee
const searchAttendee = async(query)=>{
//get only selected fields
    const selectedFields = await db('tag_settings')
    .select('column_name')
    .where('show_column',true);

//create array of selected fields column_names
const columnNamesSelected = selectedFields.map(item => item.column_name);
//add id to be always returned:
const finalFields = ['id', 'checked_in', 'check_in_time', ...columnNamesSelected]

//return attendee
const attendees = await db('attendees')
    .select(finalFields)
    .where('last_name', 'ilike', `${query}%`)

//fetch font_type (need only the first row)
const fontTypeRow = await db('tag_settings')
.select('font_type', "font_color")
.where('show_column',true)
.first()

// Extract font_type value, or set to null if not found
const fontType = fontTypeRow ? fontTypeRow.font_type : null;
const fontColor = fontTypeRow ? fontTypeRow.font_color : null;

return {attendees, fontType, fontColor}
}



//checkin attendee
const checkInAttendee = async(id)=>{
    console.log("id passed", id);
    
    const attendee = await db('attendees')
    .select('checked_in')
    .where('id', id)
    .first();

    if(!attendee){
        throw new Error ('Attendee not found');
    }

    const toggledStatus = !attendee.checked_in;
    const checkInTime = toggledStatus? new Date():null;

    await db('attendees')
    .update({checked_in:toggledStatus, check_in_time:checkInTime})
    .where('id', id)

    return await db('attendees')
    .where('id', id)
    .first()
}

module.exports={searchAttendee, checkInAttendee}