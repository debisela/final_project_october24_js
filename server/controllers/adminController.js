const {getFields, saveTagFields, getSelectedFields, updateFontType, getFontType, updateColor, getColor} = require('../models/adminModel')

const _getFields = async(req, res)=>{
    try {
        const fields = await getFields();
        res.status(200).json(fields);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'error fetching fields'})
    }
}

const _saveTagFields = async(req, res)=>{

try {
    const {selectedFields} = req.body;
    // console.log(req.body);
    
    await saveTagFields(selectedFields);
    res.status(200).json({msg:'tag fields updated successfully'})
    
    
} catch (error) {
    console.log(error);
    res.status(404).json({msg:'error updating tag fields'})
}
}

const _getSelectedFields = async(req, res)=>{
    try {
        const selectedFields = await getSelectedFields();
        res.status(200).json(selectedFields);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'error fetching fields'})
    }
}



const _updateFontType = async(req, res)=>{

    try {
        const {fontType} = req.body;
        console.log(fontType);
        
        await updateFontType(fontType);
        res.status(200).json({msg:'font-type updated successfully', fontType: fontType})
        
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'error updating font-type'})
    }
    }

    const _getFontType = async(req, res)=>{
        try {
            const fontType = await getFontType();
            res.status(200).json(fontType);
        } catch (error) {
            console.log(error);
            res.status(404).json({msg:'error fetching fonttype'})
        }
    }

    const _updateFontColor = async(req, res)=>{

        try {
            const {fontColor} = req.body;
            console.log(fontColor);
            
            await updateColor(fontColor);
            res.status(200).json({msg:'font-color updated successfully', fontColor: fontColor})
            
        } catch (error) {
            console.log(error);
            res.status(404).json({msg:'error updating font-color'})
        }
        }
    
        const _getFontColor = async(req, res)=>{
            try {
                const fontColor = await getColor();
                res.status(200).json(fontColor);
            } catch (error) {
                console.log(error);
                res.status(404).json({msg:'error fetching fontcolor'})
            }
        }


// const _updateColorSize = async(req, res)=>{

//         try {
//             const {updateFields} = req.body;
//             console.log(req.body);
            
//             await updateColorSize(updateFields);
//             res.status(200).json({msg:'font-color and size updated successfully'})
            
//         } catch (error) {
//             console.log(error);
//             res.status(404).json({msg:'error updating font-color and size'})
//         }
//         }

module.exports={_getFields, _saveTagFields, _getSelectedFields, _updateFontType,_getFontType,_updateFontColor, _getFontColor}