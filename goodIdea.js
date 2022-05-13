// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//make two arrays that hold good and bad values respectively. 
//then set up if statements to return depending on counts
function well(x){
  let good = x.filter(word => word === 'good')
  
  if(good.length > 2){
    return 'I smell a series!'
  } else if(good.length >= 1){
    return 'Publish!'
  } else{
    return 'Fail!'
  }
}