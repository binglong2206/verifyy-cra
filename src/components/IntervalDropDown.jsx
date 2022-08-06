import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Button,
    Stack,
    Flex,
  } from '@chakra-ui/react';
  
  import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs';
  import { RiFileShredLine } from 'react-icons/ri';
  
  export default function IntervalDropDown({activeTab, setActiveTab}) {
    const getTabName = ()=> {
      switch(activeTab){
        case 'd': return 'Daily'
        case 'w': return 'Weekly'
        case 'm': return 'Monthly'
        default: return null; 
      }
    }


    return (
      <Flex justifyContent="center" >
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button leftIcon={<RiFileShredLine />} rightIcon={<BsThreeDotsVertical />}>
              {getTabName()}
            </Button>         
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <Button
                  onClick={()=>setActiveTab('d')}
                  w="194px"
                  variant="ghost"
                  rightIcon={<BsChatSquareQuote />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Daily
                </Button>
                <Button
                  onClick={()=>setActiveTab('w')}
                  w="194px"
                  variant="ghost"
                  rightIcon={<BsChatSquareQuote />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Weekly
                </Button>
                <Button
                  onClick={()=>setActiveTab('m')}
                  w="194px"
                  variant="ghost"
                  rightIcon={<BsChatSquareQuote />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Monthly
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  }