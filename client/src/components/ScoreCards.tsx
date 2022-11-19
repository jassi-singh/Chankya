
const ScoreCard = () => {

    return (
        <div className="w-full h-32 flex flex-col gap-2 bg-white rounded-md drop-shadow-md p-2 justify-between">
        <div className="flex justify-between">
          <span className="text-xs text-grey-200 font-bold" >2nd T20</span>
          <span className="text-xs text-purple-400 font-bold bg-purple-200 px-2 rounded-md">Submission Ends in 1:00:05</span>
        </div>
        <div className="flex justify-between font-medium">
          <span className="" >INDIA</span>
          <span className="">vs</span>
          <span className="">NEW ZEALAND</span>
        </div>
        <div className="flex justify-between font-medium text-center items-end text-xs">
          <div>
            <span>SoneID</span>
            <br />
            <span>Contest Id</span>
          </div>
          <div>
            <span>SoneID</span>
            <br />
            <span>Contest Id</span>
          </div>
          <div>
            <span>SoneID</span>
            <br />
            <span>Contest Id</span>
          </div>
          <button className="bg-indigo-500 rounded-md h-8 px-2 text-white">Create Contest</button>
        </div>
      </div>
    )
}

export default ScoreCard