import React from "react";
import avatars from "../assets/lots-of-avatars/peep-1.png";

function ChatCardComponent() {
    return (
        <div className="mt-3 w-full flex justify-center">
            <div className="w-1/2">
                <div className="border border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between">
                    <div className="flex items-center">
                        <img
                            className="w-10 h-10 rounded-full mr-4 border border-gray-400 object-cover transform scale-125"
                            src={avatars}
                            alt="Random avatar"
                        />

                        <div className="text-sm">
                            <p className="text-orange-500 leading-none">Jonathan Reinink</p>
                            <p className="text-gray-600">Aug 18</p>
                        </div>
                    </div>
                    <p className="text-gray-700 text-base mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChatCardComponent;
