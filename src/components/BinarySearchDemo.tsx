
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const BinarySearchDemo = () => {
  const [array, setArray] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(false);
  const [highlightIndices, setHighlightIndices] = useState<{ start: number; end: number; mid: number }>({ start: -1, end: -1, mid: -1 });
  const { toast } = useToast();

  const addNumber = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      const newArray = [...array, num].sort((a, b) => a - b);
      setArray(newArray);
      setInputValue('');
    } else {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid number",
        variant: "destructive",
      });
    }
  };

  const binarySearch = async () => {
    const target = parseInt(searchValue);
    if (isNaN(target)) {
      toast({
        title: "Invalid Search Value",
        description: "Please enter a valid number to search",
        variant: "destructive",
      });
      return;
    }

    setSearching(true);
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      setHighlightIndices({ start: left, end: right, mid });
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (array[mid] === target) {
        toast({
          title: "Found!",
          description: `Number ${target} found at position ${mid}`,
        });
        setSearching(false);
        return;
      }

      if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    toast({
      title: "Not Found",
      description: `Number ${target} is not in the array`,
      variant: "destructive",
    });
    setSearching(false);
    setHighlightIndices({ start: -1, end: -1, mid: -1 });
  };

  const reset = () => {
    setArray([]);
    setSearchValue('');
    setHighlightIndices({ start: -1, end: -1, mid: -1 });
    setSearching(false);
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex gap-2">
        <Input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          className="flex-1"
          disabled={searching}
        />
        <Button onClick={addNumber} disabled={searching}>Add</Button>
      </div>
      <div className="flex gap-2">
        <Input
          type="number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Number to search"
          className="flex-1"
          disabled={searching}
        />
        <Button onClick={binarySearch} disabled={searching || array.length === 0} variant="secondary">
          Search
        </Button>
        <Button onClick={reset} disabled={searching} variant="destructive">
          Reset
        </Button>
      </div>
      <div className="flex gap-2 items-center justify-center min-h-[100px] border rounded-lg p-4">
        {array.map((num, index) => (
          <div
            key={index}
            className={`px-4 py-2 border rounded transition-all duration-300 ${
              index === highlightIndices.mid
                ? 'bg-green-500 text-white'
                : index >= highlightIndices.start && index <= highlightIndices.end
                ? 'bg-blue-200'
                : 'bg-white'
            }`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BinarySearchDemo;
